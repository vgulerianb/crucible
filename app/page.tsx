"use client";
import { useState } from "react";
import { YoutubeVideoComponent } from "./components/YoutubeVideoComponent";
import { ActionComponent } from "./components/ActionComponent";

export default function Home() {
  const [sessionId, setSessionId] = useState<string>("");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full flex items-center flex-col transition-all">
        {!sessionId ? (
          <YoutubeVideoComponent setSessionId={setSessionId} />
        ) : (
          <ActionComponent sessionId={sessionId} setSessionId={setSessionId} />
        )}
      </div>
    </div>
  );
}
