import { useState } from "react";
import Link from "next/link";
import { GithubButton } from "../../components/GithubButton";
import { prisma } from "../../../prisma/db";

async function getTweet(id: string) {
  const generations = await prisma.generations.findFirst({
    where: {
      session_id: id,
    },
    select: {
      thread: true,
    },
    orderBy: {
      created_at: "desc",
    },
    take: 1,
  });
  return generations?.thread || undefined;
}

export default async function Tweet({ params }: { params: { id: string } }) {
  const tweets = (await getTweet(params?.id)) as string[];

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-full flex items-center flex-col max-w-[900px] gap-[16px]">
        <div className="flex justify-between w-full mt-[32px]">
          <h1 className="text-[28px] font-semibold text-center">
            Twitter Thread
          </h1>
          <GithubButton />
        </div>

        {tweets && tweets?.length ? (
          tweets?.map((tweet, key) => (
            <Link
              target="_blank"
              key={key}
              href={`https://twitter.com/intent/tweet?text=${tweet}`}
              className="w-full cursor-pointer bg-[#191724] rounded-md shadow-lg p-[16px] flex flex-col gap-[16px] animate-fadeIn whitespace-break-spaces"
            >
              {tweet}
            </Link>
          ))
        ) : (
          <div className="w-full cursor-pointer bg-[#191724] rounded-md shadow-lg p-[16px] flex flex-col gap-[16px] animate-fadeIn whitespace-break-spaces">
            Threads not found. If you believe this is an error, please try
            refreshing the page or raise an issue on Github.
          </div>
        )}
      </div>
    </div>
  );
}
