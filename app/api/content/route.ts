import { openAiHandler } from "@/utils";
import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/db";

export async function POST(req: Request) {
  const request = await req.json();

  const video = await prisma.videos.findFirst({
    where: {
      session_id: request?.sessionId,
    },
    select: {
      content: true,
    },
  });
  let blog;
  let tweet;
  if (request?.variant === "tweet") {
    tweet = await getTweet(video?.content ?? "");
    if (!tweet?.length)
      return new Response("Something went wrong", {
        status: 400,
      });
  } else {
    blog = await openAiHandler(
      video?.content ?? "",
      "blog",
      request?.instructions
    );
  }
  await prisma.generations.create({
    data: {
      blog: blog,
      thread: tweet,
      session_id: request?.sessionId,
    },
  });
  return NextResponse.json({ status: true });
}

const getTweet = async (content: string, count = 1) => {
  if (count === 4) return [];
  let tweet = await openAiHandler(content ?? "", "tweet");
  try {
    tweet = JSON.parse(tweet);
  } catch (e) {
    console.log("Retry", count);
    tweet = getTweet(content, count + 1);
  }
  return tweet;
};
