import { useState } from "react";

export const ActionComponent = () => {
  const [action, setAction] = useState<string>("");

  return (
    <div className="animate-fadeIn max-w-[600px] w-full bg-[#191724] rounded-md flex flex-col gap-[16px] p-[16px]">
      <span className="text-sm cursor-pointer font-thin">{`<- Go Back`}</span>
      <span className="">What would you like to do with this video?</span>
      <div className="flex flex-col gap-[8px]">
        <button
          onClick={() => setAction("tweet")}
          type="button"
          className={`${
            action === "tweet" ? "bg-gray-600 text-white" : "text-gray-400"
          } border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600  hover:text-white hover:bg-gray-600 focus:ring-gray-800`}
        >
          Generate twitter thread
        </button>
        <button
          onClick={() => setAction("blog")}
          type="button"
          className={`${
            action === "blog" ? "bg-gray-600 text-white" : "text-gray-400"
          } border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600  hover:text-white hover:bg-gray-600 focus:ring-gray-800`}
        >
          Generate a blog post
        </button>
        <button
          onClick={() => setAction("chat")}
          type="button"
          className={`${
            action === "chat" ? "bg-gray-600 text-white" : "text-gray-400"
          } border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600  hover:text-white hover:bg-gray-600 focus:ring-gray-800`}
        >
          Chat with it
        </button>
      </div>
      {action && action !== "chat" ? (
        <>
          <textarea
            id="instructions"
            rows={4}
            className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Any instructions? (optional)"
          ></textarea>
          <button
            type="button"
            className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Generate
          </button>
        </>
      ) : action ? (
        <button
          type="button"
          className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Start Chatting
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
