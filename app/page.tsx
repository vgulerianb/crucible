"use client";
import { useEffect, useState } from "react";
import { YoutubeVideoComponent } from "./components/YoutubeVideoComponent";
import { ActionComponent } from "./components/ActionComponent";

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
        {!sessionId ? <YoutubeVideoComponent /> : <ActionComponent />}
      </div>
    </div>
  );
}
