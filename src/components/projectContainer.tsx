"use client";
import * as React from "react";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import A from "@/components/a";

type CardType = {
  title: string;
  skills: string[];
  url?: string;
  img: string;
  description: string;
};

const BoomChuck = {
  title: "BoomChuck",
  skills: ["Web Audio", "Next.js", "TypeScript", "React", "Tone.js"],
  url: "https://boomchuck.vercel.app/",
  img: "/boomchuck.png",
  description:
    "Site for interactive generation of Bluegrass-style accompaniment.",
};

const ThrowADart = {
  title: "Throw a Dart",
  skills: ["Next.js", "TypeScript", "React", "D3.js", "GeoJSON", "TopoJSON"],
  url: "https://throwadart.vercel.app/",
  img: "/throwadart.png",

  description:
    "Virtually throw a dart onto global map projections with live weather information. You may or may not end up in the water.",
};

const Dyads = {
  title: "Dyads",
  skills: [
    "Visualization",
    "Sonification",
    "React",
    "D3.js",
    "Web Audio",
    "Tone.js",
  ],
  // url: "https://boomchuck.vercel.app/",
  img: "/dyads.png",
  description:
    "Interactive sonification of longitudinal data. Conversational turns are typed and subsequently turned to music. Data Musik @ Stanford. Link coming soon!",
};

const HeatSong = {
  title: "Heat Songs",
  url: "https://boomchuck.vercel.app/",
  img: "/boomchuck.png",

  skills: ["Sonification", "D3", "Next.js", "TypeScript"],
  description: "Interactive sonification of longitudinal climate data",
};

const NightmareLibrary = {
  title: "Nightmare Library",
  url: "https://boomchuck.vercel.app/",
  img: "/boomchuck.png",

  skills: ["ChucK", "Audio Programming"],
  description: "Algorithmic composition using audio programming.",
};

const Beandolin = {
  title: "Beandolin",
  url: "https://github.com/kevinwliao/beandolin",
  img: "/beandolin.jpg",

  skills: ["Arduino", "C++", "Faust", "Microcontrollers", "Physical design"],
  description:
    "Electro-acoustic instrument prototype. Routes piezoelectric microphone response to garbanzo beans through a physical model.",
};

const Cards: CardType[] = [
  BoomChuck,
  ThrowADart,
  Dyads,
  // HeatSong,
  // NightmareLibrary,
  Beandolin,
];

export default function ProjectContainer() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="">
        {Cards.map((card, index) => (
          <CarouselItem
            key={index}
            className="max-w-96 sm:max-w-none sm:basis-1/2 md:basis-2/5"
          >
            <div className="h-full p-1">
              <a href={card.url} target="_blank" rel="noreferrer nofollow">
                <div className="box-border flex aspect-square flex-col items-start gap-4 rounded-none border-4 border-black bg-white px-6 py-8 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] transition hover:drop-shadow-[16px_25px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-slate-950 dark:drop-shadow-[10px_10px_0px_rgba(255,255,255,1)] dark:hover:drop-shadow-[16px_25px_0px_rgba(255,255,255,1)]">
                  <div className="text-2xl font-bold uppercase">
                    {card.title}:
                  </div>
                  <div className="relative h-2/3 w-full border-4 border-slate-950 bg-brat-500 dark:border-slate-50">
                    <Image
                      src={card.img}
                      alt="Throw a Dart"
                      fill={true}
                      className="object-cover object-top"
                    ></Image>
                  </div>
                  <div className="text-sm">{card.description}</div>
                  <div className="flex max-w-full flex-wrap gap-2 border-yellow-500">
                    {card.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-none bg-brat-400 px-3 py-1 text-xs font-light dark:bg-brat-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
