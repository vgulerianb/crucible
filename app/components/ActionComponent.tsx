import { useState } from "react";
import Loading from "../components/SvgComps/loading";
import axios from "axios";
import { GithubButton } from "./GithubButton";

export const ActionComponent = ({
  setSessionId,
  sessionId,
}: {
  setSessionId: (sessionId: string) => void;
  sessionId: string;
}) => {
  const [action, setAction] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [instructions, setInstructions] = useState<string>("");

  const generateContent = (variant: string) => {
    axios
      .post("/api/content", {
        sessionId: sessionId,
        variant,
        instructions,
      })
      .then(() => {
        const a = document.createElement("a");
        a.setAttribute(
          "href",
          `${window.location.origin}/${variant}/${sessionId}`
        );
        a.setAttribute("target", "_blank");
        a.setAttribute("hidden", "true");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch(() => {
        alert("Something went wrong, please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const startChat = () => {
    const a = document.createElement("a");
    a.setAttribute("href", `${window.location.origin}/chat/${sessionId}`);
    a.setAttribute("target", "_blank");
    a.setAttribute("hidden", "true");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col gap-[8px] w-full items-center">
      <div className="animate-fadeIn max-w-[600px] w-full bg-[#191724] rounded-md flex flex-col gap-[16px] p-[16px]">
        <span
          onClick={() => {
            setSessionId("");
          }}
          className="text-sm cursor-pointer font-thin"
        >{`<- Go Back`}</span>
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
              onChange={(e) => setInstructions(e.target.value)}
              value={instructions}
              id="instructions"
              rows={4}
              className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Any instructions? (optional)"
            ></textarea>
            <button
              onClick={() => {
                setLoading(true);
                generateContent(action);
              }}
              type="button"
              className={`${
                loading
                  ? "from-purple-600/10 to-blue-500/10 "
                  : "from-purple-600 to-blue-500"
              } w-full text-white bg-gradient-to-br hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 h-[40px] flex justify-center items-center font-medium rounded-lg text-sm text-center mr-2 mb-2`}
            >
              {!loading ? "Generate" : <Loading />}
            </button>
          </>
        ) : action ? (
          <button
            onClick={startChat}
            type="button"
            className={`w-full text-white bg-gradient-to-br ${
              loading
                ? "from-purple-600/10 to-blue-500/10 "
                : "from-purple-600 to-blue-500"
            }  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
          >
            Start Chatting
          </button>
        ) : (
          ""
        )}
      </div>
      <GithubButton />
    </div>
  );
};
