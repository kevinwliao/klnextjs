"use client";
import { ChevronsDown } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import Socials from "@/components/ui/socials";
import AudioPlayer from "@/components/audioPlayer";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const shadowOffsetY = scrollYProgress.get() * 100;

  return (
    <div
      id="home"
      className="z-10 flex min-h-screen flex-col border-b-4 border-slate-950 px-4 py-24 odd:bg-blue-200 even:bg-white dark:border-slate-50 dark:odd:bg-blue-950 dark:even:bg-slate-900 md:px-24 lg:px-48 xl:px-72 xl:py-24"
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-50 h-2 w-screen origin-left bg-yellow-500 dark:bg-yellow-300"
      ></motion.div>
      <div className="flex flex-col items-start justify-between sm:flex-row sm:gap-6 xl:gap-12">
        <div className="mb-2 uppercase">
          <h1 className="sm:mt-12">
            <div className="relative z-50 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
              Hi, I'm
            </div>
            <div className="relative z-50 mb-2 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
              Kevin Liao
            </div>
          </h1>
          <h2 className="relative z-50 text-2xl font-semibold tracking-tight text-yellow-600 dark:text-yellow-300 sm:text-4xl">
            Developer and Artist
          </h2>
        </div>
        <AudioPlayer></AudioPlayer>
      </div>
      <div className="z-50 flex flex-grow items-center justify-center">
        <a
          href="#about"
          className="flex flex-col items-center justify-center gap-4 tracking-tight transition-all hover:tracking-wide hover:text-sky-600"
        >
          <div className="text-2xl font-medium sm:block">Learn More</div>
          <ChevronsDown className="animate-bounce"></ChevronsDown>
        </a>
      </div>
    </div>
  );
}
