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
  let tweet = await openAiHandler(video?.content ?? "", "tweet");
  if (!tweet?.length)
    return new Response("Something went wrong", {
      status: 400,
    });
  try {
    tweet = JSON.parse(tweet);
  } catch (e) {
    tweet = await openAiHandler(video?.content ?? "", "tweet");
    console.log({ tweet });
    tweet = JSON.parse(tweet);
  }

  const blog = await openAiHandler(video?.content ?? "", "blog");
  await prisma.generations.create({
    data: {
      blog: blog,
      thread: tweet,
      session_id: request?.sessionId,
    },
  });
  return NextResponse.json({ status: true });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("sessionId");
  const variant = url.searchParams.get("variant") ?? "blog";
  const generations = await prisma.generations.findFirst({
    where: {
      session_id: sessionId,
    },
    select: {
      blog: variant === "blog" ? true : false,
      thread: variant !== "blog" ? true : false,
    },
  });
  console.log({ generations });
  return NextResponse.json(generations);
}
