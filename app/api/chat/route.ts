import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
);

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  const request = await req.json();
  const { prompt, sessionId, previous } = request;

  if (!prompt || !sessionId) {
    return new Response("Invalid session");
  }
  if (previous && previous?.length > 4) {
    previous.splice(0, previous.length - 4);
  }
  const videoContent = await supabaseClient.from("videos").select("content");

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-16k",
      stream: true,
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content: `You a are nice and helpful human educator. Given the following surfaced documents and a question, create a Final answer in markdown.  Try to  provide concise code snippets for coding questions.
          Document Content:
            ${videoContent?.data?.[0]?.content}
          `,
        },
        ...(previous?.length
          ? previous?.map((prev: any) => ({
              role: prev.isSender ? "user" : "system",
              content: prev.msg,
            }))
          : []),
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const stream = OpenAIStream(response, {
      onCompletion: async (completion: string) => {
        await supabaseClient.from("conversations").insert({
          query: prompt,
          response: completion,
          session_id: sessionId,
        });
      },
    });
    console.log({ stream: "" });
    return new StreamingTextResponse(stream);
  } catch (e) {
    console.log(e);
    return new Response("Something went wrong");
  }
}
