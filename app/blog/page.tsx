"use client";
import { useState } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehype from "rehype-raw";
import { GithubButton } from "../components/GithubButton";

export default function Tweet() {
  const [blog, setBlog] =
    useState<string>(`# Pan Masala Industry: The Hidden Truth Revealed

###### Intro
We often witness popular Bollywood actors endorsing products in advertisements. But have you ever wondered how affordable it is for pan masala companies to cast expensive actors like Ajay Devgan, Shah Rukh Khan, and Akshay Kumar? How can they manage such high budget promotions? In this blog, we will explore the financial aspect of the pan masala industry and shed light on its magnitude.

###### The Financial Powerhouse of Pan Masala
Pan masala companies indeed have the means to afford these big stars for their promotions. They sponsor film awards, print full-page ads in major newspapers, and even shoot their 30-second commercials in exquisite foreign locations. All of this requires substantial financial resources. And the reason they are able to manage this is simply because the pan masala market in India is worth a staggering Rs. 41,000 crores!

To put things into perspective, the chocolate market in India stands at Rs. 16,000 crores, while the biscuit market is valued at Rs. 37,000 crores. When you consider that big stars charge around Rs. 10 crores for an ad, it becomes clear that in a Rs. 41,000 crore industry, this expenditure is merely 0.02% of the total revenue. Such is the financial strength of the pan masala industry in India.

###### The Dark Side: The Impact of Pan Masala Industry
While the pan masala industry has achieved remarkable success financially, there are serious concerns regarding its impact on public health. The World Health Organization warns that 10 crore people globally die from tobacco-related cancers, and this number is expected to rise to 100 crores in the 21st century. The question arises - can we overlook the danger posed by this industry?

Officially, the product sold by pan masala companies does not contain tobacco. However, a closer look reveals a hidden reality. When customers buy pan masala, they also receive a smaller secret packet, which contains the tobacco or addictive substances. Mixing this with the pan masala leads to severe health problems, including mouth cancer, as confirmed by many individuals' personal experiences.

###### The Genius of Pan Masala Marketing
The pan masala industry has exhibited genius in its marketing strategies. To avoid the restrictions on promoting tobacco products, which were imposed after 2011, companies eliminated tobacco from their pan masala products. Instead, they emphasized the other ingredients and marketed their products as food items. Surprisingly, the same organization that regulates biscuits also regulates pan masala, further blurring the lines between these two seemingly unrelated products.

The use of big stars to endorse pan masala is another strategy employed by the industry. These celebrities agree to promote the product, knowing that it technically does not contain tobacco. Consequently, these advertisements are not subjected to the restrictions placed on promoting tobacco products. It is a clever approach that allows the industry to leverage the popularity and influence of these actors.

The marketing tactics deployed by pan masala brands are reminiscent of surrogate advertising, which is also observed in the alcohol industry. Alcohol companies advertise club soda or release music CDs to indirectly promote their brand, ensuring that the brand image remains intact. Similarly, pan masala brands sell silver-coated elaichi, cleverly packaged to match their pan masala products. However, the ads conveniently omit any mention of this additional product. While selling elaichi itself is not a crime, the hidden agenda behind these ads raises serious concerns.

###### The Looming Public Health Crisis: Tuberculosis (TB)
While the public health implications of tobacco-related diseases are well-known, there is another silent threat that often goes unnoticed - tuberculosis (TB). India bears a significant burden of global TB cases, with one-third of all cases originating in the country. The spread of TB is similar to that of COVID-19 - through droplets emitted when an infected person sneezes, coughs, or, alarmingly, spits.

A person chewing pan masala spits an average of 20-30 times every 10 minutes. If that person happens to be a rickshaw driver, traveling extensively across the city, they can unknowingly spread TB throughout the entire city. Such individuals can unwittingly bring TB into your home, without it being your fault. This disease has the potential to ruin lives and affect countless families.

###### Taking Responsibility for a Better Future
It is high time that the pan masala industry takes responsibility for the impact it is having on public health. While the industry continues to prosper financially, the consequences are dire. It is estimated that Indian Railways spends a whopping Rs. 1200 crores every year solely on cleaning spit stains caused by pan masala users. This raises an important question - who should bear the responsibility for this loss? The answer is clear: the pan masala industry itself.

With a turnover of Rs. 41,000 crores, it is not unreasonable to expect that a small portion of their revenue, even 0.01%, could be allocated to address the issue of cleaning the stains caused by their products. However, until such accountability is established, individuals can make a difference through their own actions.

The author of this blog shares a personal experience of consciously choosing not to ride in rickshaws where the drivers openly admit to spitting on the road or exhibit visible signs of consuming addictive products. By doing so, the author ensures that their money supports individuals who refrain from these harmful habits and promotes a healthier environment.

###### An Urgent Call to Action
To combat the issue at hand, it is essential that awareness regarding the impact of the pan masala industry reaches every corner of India. The author encourages readers to share this video and tag their favorite actors, celebrities, and influencers, urging them to reflect on the consequences of their promotions. It is crucial to hold these influential figures accountable for their actions and the impact they have on public health.

While the world grapples with the COVID-19 pandemic, it is disheartening to witness the same mistakes being repeated despite the hardships endured. The call to action is simple - refrain from consuming pan masala, as it contributes to the rise of oral cancer and TB. By doing so, individuals can collectively make a significant difference in reducing the number of lives affected by these preventable diseases.

The battle against these harmful habits cannot be won by one individual alone, but together, a united effort can create meaningful change. It is time for every Indian to take a stand and support a cleaner and healthier nation. Will you contribute to the betterment of your country by no longer supporting those who spit on it? The choice is yours.

###### Conclusion
In conclusion, the pan masala industry's financial prowess cannot be denied, with its worth amounting to a staggering Rs. 41,000 crores in India. However, the industry's impact on public health cannot be overlooked. With the hidden threats of tobacco-related diseases and the rapid spread of tuberculosis through spitting, it becomes crucial for the industry to take responsibility.

Individually, we can make a difference by opting not to support those who engage in harmful habits. By raising awareness and initiating conversations, we can hold influential figures accountable for the consequences of their actions. Together, we can create a cleaner and healthier nation, where the harmful effects of pan masala become a thing of the past.

Thank you for taking the time to read this insightful blog. Your support can truly make a difference.`);

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-full flex items-center flex-col max-w-[900px] gap-[16px]">
        <span className="text-sm cursor-pointer w-full">{`<- Go Back`}</span>
        <div className="flex justify-between w-full">
          <h1 className="text-[28px] font-semibold text-center">
            Generated Blog
          </h1>
          <GithubButton />
        </div>

        <div className="w-full cursor-pointer bg-[#191724] rounded-md shadow-lg p-[16px] flex flex-col gap-[16px] animate-fadeIn whitespace-break-spaces">
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(blog);
              alert("Copied to clipboard!");
            }}
            className="w-fit ml-auto border focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
          >
            Copy Markdown
          </button>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehype]}
            className={`markdownHolder`}
          >
            {blog}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
