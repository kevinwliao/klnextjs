"use client";
import A from "@/components/a";
import {
  FastForward,
  Pause,
  PauseOctagon,
  Play,
  PlaySquare,
  Rewind,
} from "lucide-react";
import { useState } from "react";

const Note = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="m83.3 29.695v2.418h-1.322v-2.418zm-1.209-1.19v2.418h-1.322v-2.418zm-1.162-1.19v2.418h-1.322v-2.418zm-1.181-1.209v7.575h-1.301v-7.575zm-1.245 8.222v3.778h-2.437v-3.778zm-3.628.127h3.778v2.437h-3.778zm1.096-1.171h3.778v3.627h-3.778z"
        transform="translate(-71.09-24.1)"
        className="fill-lime-800"
      />
    </svg>
  );
};

const NightmareLibrary = {
  title: "Nightmare Library",
  year: "2023",
  location: "CCRMA",
  description:
    "Algorithmic composition created in the ChucK programming language.",
};

const Blurb1 = () => {
  return (
    <div className="font-mono text-sm font-medium tracking-widest">
      <div className="text-lg font-black">Nightmare Library (2023)</div> is an
      algorithmic composition created in the{" "}
      <A className="normal-case" href="https://chuck.stanford.edu/">
        ChucK
      </A>{" "}
      programming language.{" "}
      <A href="https://soundcloud.com/kevin-liao-775540098/nightmare-library-1">
        info and attributions.
      </A>
    </div>
  );
};

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex w-72 rotate-3 flex-col items-center gap-6 border-4 border-black bg-slate-50 p-6 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] transition hover:rotate-6 hover:drop-shadow-[16px_25px_0px_rgba(0,0,0,1)] motion-reduce:transition-none dark:border-white dark:bg-slate-950 dark:drop-shadow-[10px_10px_0px_rgba(255,255,255,1)] dark:hover:drop-shadow-[16px_25px_0px_rgba(255,255,255,1)]">
      <div className="thumbnail aspect-square w-full border-4 border-black bg-[#8ace00] dark:border-white">
        <Note></Note>
      </div>
      <div className="interface flex w-full items-center justify-around">
        <button>
          <Rewind
            size="32"
            strokeWidth="4"
            className="fill-current/0 transition hover:fill-current"
            absoluteStrokeWidth={true}
            strokeLinejoin="miter"
          ></Rewind>
        </button>
        <button onClick={() => setPlaying((prev) => !prev)}>
          {!playing ? (
            <Play
              absoluteStrokeWidth={true}
              size="48"
              strokeWidth="4"
              className="fill-current/0 transition hover:fill-current"
              strokeLinejoin="miter"
            ></Play>
          ) : (
            <Pause
              absoluteStrokeWidth={true}
              size="48"
              strokeWidth="4"
              className="fill-current/0 transition hover:fill-current"
              strokeLinejoin="miter"
            ></Pause>
          )}
        </button>
        <button>
          <FastForward
            absoluteStrokeWidth={true}
            size="32"
            strokeWidth="4"
            className="fill-current/0 transition hover:fill-current"
            strokeLinejoin="miter"
          ></FastForward>
        </button>
      </div>
      <Blurb1></Blurb1>
    </div>
  );
}
