"use client";
import { useState } from "react";
import axios from "axios";
import Loading from "../components/SvgComps/loading";
import { GithubButton } from "./GithubButton";

export const YoutubeVideoComponent = ({
  setSessionId,
}: {
  setSessionId: (sessionId: string) => void;
}) => {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
    const match = regex.exec(url);
    if (!match) {
      alert("Invalid URL");
      return;
    }
    setLoading(true);

    axios
      .post("/api/new", {
        url: url,
      })
      .then((res) => {
        setSessionId(res.data.sessionId);
      })
      .catch(() => {
        alert("Unable to process given video, try another one.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="text-[28px] font-semibold text-center">
        Welcome to Crucible
      </h1>
      <div className="max-w-[600px] w-full bg-[#191724] rounded-md shadow-lg p-[16px] flex flex-col gap-[16px] animate-fadeIn">
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Youtube Video URL
          </label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            id="url"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://www.youtube.com/watch?v=TX9qSaGXFyg&t=23s"
            required
          />
        </div>
        <button
          onClick={!loading ? handleSubmit : undefined}
          type="button"
          className={`w-full text-white h-[40px] bg-gradient-to-br ${
            loading
              ? "from-purple-600/10 to-blue-500/10 "
              : "from-purple-600 to-blue-500"
          }  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm flex  items-center justify-center text-center mr-2 mb-2`}
        >
          {!loading ? "Continue" : <Loading />}
        </button>
      </div>

      <div className="flex flex-col gap-[8px] items-center max-w-[600px] w-full ">
        <h2 className="text-[20px] font-semibold ">Features</h2>
        <div className="flex gap-[8px] w-full flex-col">
          <div className="bg-[#191724] p-[18px] rounded-md w-full">
            Generate a twitter thread from a youtube video
          </div>
          <div className="bg-[#191724] p-[18px] rounded-md w-full">
            Generate a blog from a youtube video
          </div>
          <div className="bg-[#191724] p-[18px] rounded-md w-full">
            Chat with the youtube video
          </div>
        </div>
        <GithubButton />
      </div>
    </>
  );
};
