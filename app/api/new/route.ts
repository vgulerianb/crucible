import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/db";
import { getSubtitles } from "youtube-captions-scraper";

const uuid = require("uuid");

export async function POST(req: Request) {
  const request = await req.json();
  if (!request?.url)
    return new Response("Something went wrong", {
      status: 400,
    });
  const urlObj = new URL(request?.url);
  const youtubeVideoId = urlObj.searchParams.get("v");
  const sessionId = uuid.v4() + "_" + new Date().getTime();
  let content = await getSubtitles({
    videoID: youtubeVideoId,
  }).catch((err: any) => {
    console.log(err);
  });
  if (!content?.length)
    return new Response("Something went wrong", {
      status: 400,
    });
  content = content.map((c: any) => c.text).join(" ");

  const videoStatus = await prisma.videos.create({
    data: {
      url: request.url,
      session_id: sessionId,
      content,
    },
  });
  console.log(videoStatus);
  return NextResponse.json({ sessionId });
}
