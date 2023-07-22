"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setSessionId("123456789");
    }, 4000);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full flex items-center flex-col transition-all">
        {!sessionId ? (
          <>
            <h1 className="text-[28px] font-semibold text-center">
              Welcome to ABC
            </h1>
            <div className="max-w-[600px] w-full bg-[#191724] rounded-md shadow-lg p-[16px] flex flex-col gap-[16px] animate-fadeIn">
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Youtube Video URL
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://www.youtube.com/watch?v=TX9qSaGXFyg&t=23s"
                  required
                />
                <span className="text-red-500 text-[14px]">
                  Can not process this video, please try another one
                </span>
              </div>
              <button
                type="button"
                className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <div className="animate-fadeIn max-w-[600px] w-full bg-[#191724] rounded-md flex flex-col gap-[16px] p-[16px]">
            <span className="text-sm cursor-pointer font-thin">{`<- Go Back`}</span>
            <span className="">What would you like to do with this video?</span>
            <div className="flex flex-col gap-[8px]">
              <button
                type="button"
                className="border  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
              >
                Generate twitter thread
              </button>
              <button
                type="button"
                className="border  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
              >
                Generate a blog post
              </button>
              <button
                type="button"
                className="border  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
              >
                Chat with it
              </button>
            </div>

            <button
              type="button"
              className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Generate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
