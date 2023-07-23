"use client";
import { useEffect, useState } from "react";
import { GithubButton } from "../../components/GithubButton";
import BotSvg from "../../components/SvgComps/BotSvg";
import EnterSvg from "../../components/SvgComps/EnterSvg";
import LoadingSvg from "../../components/SvgComps/loading";
import ReactMarkdown from "react-markdown";
import axios from "axios";

interface ChatInterface {
  msg: string;
  isSender: boolean;
}

export default function Chat(params: any) {
  const variant = "dark";
  const [answer, setAnswer] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [chats, setChats] = useState<ChatInterface[]>([
    {
      msg: "Hi how can I help you?",
      isSender: false,
    },
  ]);

  const scrollToBottom = () => {
    const chatsHolder = document.querySelector(".chatsHolder");
    if (chatsHolder) {
      chatsHolder.scrollTop = chatsHolder.scrollHeight;
    }
  };

  const handleSearch = async () => {
    if (loading) return;
    const searchValue = search.trim();
    setSearch("");
    setChats((prev) => [
      ...prev,
      {
        msg: search,
        isSender: true,
      },
      {
        msg: "",
        isSender: false,
      },
    ]);
    setLoading(true);
    console.log({ params });
    await axios
      .post(
        "/api/chat",
        {
          sessionId: params?.params?.id,
          prompt: searchValue,
          previous: chats.slice(1, chats.length),
        },
        {
          onDownloadProgress: (progressEvent: any) => {
            if (progressEvent?.event?.target?.response)
              setAnswer(progressEvent?.event?.target?.response);
          },
        }
      )
      .then((response) => {
        setAnswer(response?.data);
      })
      .catch(() => {
        setAnswer("Something went wrong, please try again later.");
      });
    setLoading(false);
    setTimeout(() => {
      setAnswer("");
    });
  };

  useEffect(() => {
    scrollToBottom();
    if (answer !== "") {
      let tempChats = [...chats];
      tempChats[tempChats.length - 1].msg = answer;
      setChats(tempChats);
    }
  }, [answer, loading]);

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-full flex items-center flex-col max-w-[900px] gap-[16px]">
        <div className="flex justify-between w-full">
          <h1 className="text-[28px] font-semibold text-center">
            Chat with the youtube bot
          </h1>
          <GithubButton />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "900px",
            maxHeight: "100%",
            borderRadius: "0.375rem",
            backgroundColor: variant === "dark" ? "#262626" : "#f9fafb",
            marginLeft: "16px",
            marginRight: "16px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              overflow: "scroll",
              minHeight: "150px",
              height: "100%",
            }}
            className="chatsHolder"
          >
            {chats?.map((chat, index) =>
              answer.length || chat?.msg?.length ? (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "16px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    borderBottom:
                      chats?.length - 1 !== index
                        ? `1px solid ${
                            variant === "dark"
                              ? "rgba(255, 255, 255, 0.6)"
                              : "#d1d5db"
                          }`
                        : "",
                  }}
                >
                  {!chat?.isSender || (answer && chats.length - 1 === index) ? (
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        minWidth: "32px",
                        borderRadius: "0.375rem",
                        overflow: "hidden",
                      }}
                    >
                      <BotSvg />
                    </div>
                  ) : (
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        minWidth: "32px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${
                          variant === "dark"
                            ? "rgba(255, 255, 255, 0.6)"
                            : "#d1d5db"
                        }`,
                        borderRadius: "0.375rem",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={variant === "dark" ? "#ffffff" : "#000000"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  )}
                  {!(loading && answer === "") || index !== chats.length - 1 ? (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <ReactMarkdown className={`markdownHolder`}>
                        {answer !== "" && index === chats.length - 1
                          ? answer
                          : chat?.msg}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )
            )}
            {loading && answer === "" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  textAlign: "center",
                  color: variant === "dark" ? "#ffffff" : "#4b5563",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  fontSize: "14px",
                  borderTop: `1px solid ${
                    variant === "dark" ? "rgba(255, 255, 255, 0.6)" : "#d1d5db"
                  }`,
                }}
              >
                <LoadingSvg />
                Searching. This may take a second!
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              backgroundColor:
                variant === "dark" ? "#313131" : "rgb(218, 227, 244)",
              padding: "4px",
              display: "flex",
              borderRadius: "0.375rem",
            }}
          >
            <textarea
              autoFocus
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.shiftKey) return;
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch();
                }
              }}
              value={search}
              style={{
                borderRadius: "0.375rem",
                backgroundColor: "transparent",
                resize: "none",
                width: "100%",
                padding: "8px",
                color: variant === "dark" ? "#ffffff" : "#000000",
                outline: "none",
                border: "none",
              }}
            />
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                color: variant === "dark" ? "#ffffff" : "#000000",
                width: "80px",
                padding: "4px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleSearch();
              }}
            >
              <EnterSvg />
              Ask
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "11px",
              paddingTop: "4px",
            }}
          >
            <span
              style={{
                color: variant === "dark" ? "#ffffff" : "#000",
              }}
            >
              Powered by{" "}
              <a
                style={{
                  textDecoration: "none",
                  color: "#1e88e5",
                }}
                href="https://github.com/vgulerianb/DocNavigator"
                target="_blank"
              >
                DocNavigator
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
