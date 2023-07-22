"use client";
import { useState } from "react";
import Link from "next/link";
import { GithubButton } from "../components/GithubButton";

export default function Tweet() {
  const [tweets, setTweets] = useState<string[]>([
    `Have you ever wondered how these Rs. 4 Pan Masala companies can afford to cast expensive actors like Ajay Devgan, SRK, Akshay Kumar in their ads? Let's dive into the economics of this industry in the thread below! #PanMasala #Bollywood #Economics`,
  ]);

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-full flex items-center flex-col max-w-[900px] gap-[16px]">
        <span className="text-sm cursor-pointer w-full">{`<- Go Back`}</span>

        <div className="flex justify-between w-full">
          <h1 className="text-[28px] font-semibold text-center">
            Twitter Thread
          </h1>
          <GithubButton />
        </div>

        {tweets?.map((tweet, key) => (
          <Link
            target="_blank"
            key={key}
            href={`https://twitter.com/intent/tweet?text=${tweet}`}
            className="w-full cursor-pointer bg-[#191724] rounded-md shadow-lg p-[16px] flex flex-col gap-[16px] animate-fadeIn whitespace-break-spaces"
          >
            {tweet}
          </Link>
        ))}
      </div>
    </div>
  );
}
