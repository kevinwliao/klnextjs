"use client";
import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BoomChuck = {
  title: "BoomChuck",
  skills: ["Web Audio", "NextJS", "TypeScript", "React"],
  description: "Bluegrass backing track generator",
};

const ThrowADart = {
  title: "Throw a Dart",
  skills: ["NextJS", "TypeScript", "React", "D3", "GeoJSON", "TopoJSON"],
  description: "Virtually throw a dart onto different map projections",
};

const Dyads = {
  title: "Dyads",
  skills: ["Visualization", "Sonification", "React", "D3"],
  description:
    "Interactive sonification of longitudinal data. The Change Lab @ Stanford",
};

const HeatSong = {
  title: "Heat Songs",
  skills: ["Sonification", "D3", "NextJS", "TypeScript"],
  description: "Interactive sonification of longitudinal climate data",
};

const Cards = [BoomChuck, ThrowADart, Dyads, HeatSong];

export default function ProjectContainer() {
  return (
    <Carousel
      opts={{
        align: "start",
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
              <div className="box-border flex aspect-square flex-col items-start gap-2 rounded-none border-4 border-black bg-white p-4 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] transition hover:drop-shadow-[16px_25px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-slate-950 dark:drop-shadow-[10px_10px_0px_rgba(255,255,255,1)] dark:hover:drop-shadow-[16px_25px_0px_rgba(255,255,255,1)]">
                <div className="h-2/3 w-full bg-red-500"></div>
                <div>
                  <div className="font-mono text-lg font-semibold">
                    {card.title}:
                  </div>
                  <div className="">{card.description}</div>
                </div>
                <div className="flex max-w-full flex-wrap gap-2 border-yellow-500">
                  {card.skills.map((skill) => (
                    <span className="rounded-full bg-slate-200 px-3 text-sm font-light dark:bg-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
