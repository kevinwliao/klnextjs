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
      id="0"
      className="flex min-h-screen flex-col px-4 py-32 odd:bg-blue-200 even:bg-white dark:odd:bg-blue-950 dark:even:bg-slate-900 xl:px-72 xl:py-32"
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-50 h-2 w-screen origin-left bg-yellow-600 dark:bg-yellow-300"
      ></motion.div>
      <div className="flex flex-col items-start justify-between gap-12 sm:flex-row">
        <div className="uppercase">
          <h1 className="sm:mt-12">
            <div className="relative z-50 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
              Hi, I'm
            </div>
            <div className="relative z-50 mb-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
              Kevin Liao
            </div>
          </h1>
          <h2 className="relative z-50 text-4xl font-semibold tracking-tight text-yellow-600 dark:text-yellow-300">
            Front-end Developer & Musician
          </h2>
        </div>
        <AudioPlayer></AudioPlayer>
      </div>
      <div className="flex flex-grow items-center justify-center">
        <a
          href="#1"
          className="flex flex-col items-center justify-center gap-4 tracking-tight transition-all hover:tracking-wide hover:text-sky-600"
        >
          <div className="text-2xl font-medium">Learn More</div>
          <ChevronsDown className="animate-bounce"></ChevronsDown>
        </a>
      </div>
    </div>
  );
}
