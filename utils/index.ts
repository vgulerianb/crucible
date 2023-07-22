import { decode, encode } from "gpt-tokenizer";

const openAiHandler = async (
  query: string,
  variant: string,
  instructions?: string
) => {
  let encoded = encode(query);
  query = "";

  if (encoded?.length > 10000) {
    encoded = encoded.slice(0, 10000);
  }
  const decoded = await decode(encoded);
  const tweetExample = [
    {
      role: "user",
      content: "Example",
    },
    {
      role: "assistant",
      content: "['Tweet1', 'Tweet2']",
    },
    {
      role: "user",
      content: `A new PostgreSQL extension is now available in Supabase: pgvector, an open-source vector similarity search. The exponential progress of AI functionality over the past year has inspired many new real world applications. One specific challenge has been the ability to store and query embeddings at scale. In this post we'll explain what embeddings are, why we might want to use them, and how we can store and query them in PostgreSQL using pgvector.`,
    },
    {
      role: "assistant",
      content: `["🚀 Exciting news! 🎉 Supabase has just released a new PostgreSQL extension called pgvector! 🐘 It's an open-source vector similarity search that enables storing and querying of embeddings at scale. Let's dive in to learn more about this game-changing technology! #AI #PostgreSQL #pgvector", "🔎 What are embeddings, you ask? Embeddings are dense numerical representations of data that capture its semantic meaning. They have been crucial in various AI applications such as natural language processing and computer vision. #AI #Embeddings #pgvector", "💡 With the exponential progress in AI functionality, the demand for storing and querying embeddings at scale has increased. That's where pgvector comes in. It allows you to efficiently store and search vector embeddings directly in PostgreSQL 🐘. Say goodbye to performance bottlenecks! #pgvector #PostgreSQL", "🔍 Wondering how to get started with pgvector? It's as easy as installing the extension and creating a pgvector column on your table. Just a few simple steps, and you're ready to store and query your vector embeddings at lightning speed! ⚡️ #pgvector #AI #PostgreSQL", "🎯 Whether you're working on recommendation systems, image recognition, or any AI application that requires similarity search, pgvector and Supabase have got your back! Say hello to efficient, scalable, and lightning-fast vector similarity search with pgvector! 🚀 #pgvector #Supabase"]`,
    },
  ];

  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-16k",
      messages: [
        {
          role: "system",
          content:
            variant === "blog"
              ? `You are a highly efficient assistant specializing in converting user information into engaging, viral SEO-friendly detailed blog posts. Adhering to the key structure of a blog post - including Heading 1, Introduction, Body, and End notes - you weave compelling narratives without deviating from the facts provided in the input text. Please ensure responses are returned in markdown format.`
              : `You are a highly efficient assistant that can turn user input into a concise, engaging viral tweet thread. While aiming to include all key information, keep the thread to a maximum of 5 tweets. Please formulate responses in this format ["Tweet1", "Tweet2"].`,
        },
        ...(variant === "tweet" ? tweetExample : []),
        {
          role: "user",
          content: `${
            instructions
              ? `Instructions given by user: ${instructions}\n Content:\n`
              : ""
          }${decoded}`,
        },
      ],
      max_tokens: 1800,
      temperature: 0.4,
      stream: false,
    }),
  });
  const data = await response.json();

  return data?.choices?.[0]?.message?.content ?? null;
};

export { openAiHandler };
