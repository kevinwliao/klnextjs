"use client";
import A from "@/components/a";
import {
  SkipForward,
  SkipBack,
  Pause,
  PauseOctagon,
  Play,
  PlaySquare,
  Rewind,
  FastForward,
} from "lucide-react";
import { useRef, useState } from "react";

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

const Blurb = () => {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold lowercase">Nightmare Library</div>{" "}
      <div className="text-sm">
        algorithmic composition created in{" "}
        <A className="normal-case" href="https://chuck.stanford.edu/">
          ChucK
        </A>
        .{" "}
        <A href="https://soundcloud.com/kevin-liao-775540098/nightmare-library-1">
          info and attributions.
        </A>
      </div>
    </div>
  );
};

const songs = [
  {
    title: "Nightmare Library",
    description: (
      <>
        Algorithmic composition created in{" "}
        <A className="normal-case" href="https://chuck.stanford.edu/">
          ChucK
        </A>
        .{" "}
        <A href="https://soundcloud.com/kevin-liao-775540098/nightmare-library-1">
          info and attributions.
        </A>
      </>
    ),
  },
  {
    title: "Running, Stomping...",
    description: <>Piece for saxophone quartet, performed at CCRMA in 2022</>,
  },
];

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (!playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setPlaying((prev) => !prev);
  };

  return (
    <div className="relative mr-4 flex items-center gap-4 rounded-tl-[3rem] border-4 border-black bg-slate-50 p-6 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] transition hover:drop-shadow-[16px_25px_0px_rgba(0,0,0,1)] motion-reduce:transition-none dark:border-white dark:bg-slate-950 dark:drop-shadow-[10px_10px_0px_rgba(255,255,255,1)] dark:hover:drop-shadow-[16px_25px_0px_rgba(255,255,255,1)] sm:w-72 sm:rotate-3 sm:flex-col sm:hover:rotate-6 md:mr-0">
      <div className="thumbnail aspect-square w-full rounded-tl-[1.6rem] border-4 border-black bg-[#8ace00] dark:border-white">
        <Note></Note>
      </div>
      <audio ref={audioRef} onEnded={() => setPlaying(false)}>
        <source src="/audio/nightmarelibrary.wav"></source>
      </audio>

      <div className="flex flex-col justify-start gap-2">
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
          <button onClick={handlePlayPause}>
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
        <Blurb></Blurb>
        {/*fixes drop-shadow cutoff bug*/}
        <div className="absolute -right-12"></div>
      </div>
    </div>
  );
}
