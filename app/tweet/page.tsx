"use client";
import { useState } from "react";
import Link from "next/link";
import { GithubButton } from "../components/GithubButton";

export default function Tweet() {
  const [tweets, setTweets] = useState<string[]>([
    `Have you ever wondered how these Rs. 4 Pan Masala companies can afford to cast expensive actors like Ajay Devgan, SRK, Akshay Kumar in their ads? Let's dive into the economics of this industry in the thread below! #PanMasala #Bollywood #Economics`,
    `Pan Masala companies sponsor film awards, print full-page ads in major newspapers, and even shoot their 30-second ads in foreign locations. All of this requires money, and guess what? The Pan Masala market in India is worth a whopping Rs. 41,000 crores! #PanMasala #MarketSize`,
    `To put things into perspective, the chocolates market in India is Rs. 16,000 crores, and the biscuit market is Rs. 37,000 crores. With a market worth Rs. 41,000 crores, paying big stars like Ajay Devgan and SRK a mere Rs. 10 crore for an ad is only 0.02% of the industry's value. #PanMasala #MarketComparison`,
    `India leads the world in Pan Masala export, and the biggest importer is the UAE. The Pan Masala industry in India also employs 4.5 crore people in the tobacco sector. Now, let's move on to the important question - is it legal to sell people cancer? #PanMasala #TobaccoIndustry`,
    `The World Health Organization states that 10 crore people die of tobacco-related cancers, and this number is projected to rise to 100 crores in the 21st century. While pan masala no longer contains tobacco due to bans, the secret lies in the smaller secret packet given with the product. #PanMasala #CancerWarning`,
    `Hiding behind legal technicalities, pan masala companies promote their products without the cancer warning label. Big stars are incentivized to promote these masalas because they don't contain tobacco officially. The industry relies on surrogate advertising and clever marketing techniques. #PanMasala #MarketingGenius`,
    `While pan masala may not have tobacco itself, the secret packet provided with it contains the dangerous substance. Mixing this mixture in the pan masala can lead to mouth cancer. So, consuming pan masala, even without tobacco directly, can have serious health consequences. #PanMasala #HealthRisks`,
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
