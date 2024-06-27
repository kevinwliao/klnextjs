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

const BoomChuck = {
  title: "BoomChuck",
  skills: ["Web Audio", "Next.js", "TypeScript", "React"],
  description:
    "Site for interactive generation for Bluegrass-style accompaniment",
};

const ThrowADart = {
  title: "Throw a Dart",
  skills: ["Next.js", "TypeScript", "React", "D3", "GeoJSON", "TopoJSON"],
  description:
    "Virtually throw a dart onto Mercator and Transverse Mercator map projections",
};

const Dyads = {
  title: "Dyads",
  skills: ["Visualization", "Sonification", "React", "D3"],
  description:
    "Interactive sonification of longitudinal data. The Change Lab @ Stanford",
};

const HeatSong = {
  title: "Heat Songs",
  skills: ["Sonification", "D3", "Next.js", "TypeScript"],
  description: "Interactive sonification of longitudinal climate data",
};

const NightmareLibrary = {
  title: "Nightmare Library",
  skills: ["ChucK", "Audio Programming"],
  description: "2023 algorithmic composition",
};

const Cards = [BoomChuck, ThrowADart, Dyads, HeatSong, NightmareLibrary];

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
              <div className="box-border flex aspect-square flex-col items-start gap-2 rounded-none border-4 border-black bg-white p-4 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] transition hover:drop-shadow-[16px_25px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-slate-950 dark:drop-shadow-[10px_10px_0px_rgba(255,255,255,1)] dark:hover:drop-shadow-[16px_25px_0px_rgba(255,255,255,1)]">
                <div className="relative h-2/3 w-full border-4 border-slate-950 bg-red-500">
                  <Image
                    src="/throwadart.png"
                    alt="Throw a Dart"
                    fill={true}
                    className="object-cover"
                  ></Image>
                </div>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
