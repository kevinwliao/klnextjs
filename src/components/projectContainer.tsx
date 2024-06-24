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
  skills: ["Data Visualization", "Data Sonification", "React", "D3"],
  description:
    "Interactive sonification of longitudinal data, created under Nilam Ram for The Change Lab @ Stanford",
};

const Cards = [BoomChuck, ThrowADart, Dyads];

export default function ProjectContainer() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full flex-grow border-4 border-yellow-500"
    >
      <CarouselContent className="">
        {Cards.map((card, index) => (
          <CarouselItem
            key={index}
            className="overflow-visible md:basis-1/2 lg:basis-1/3"
          >
            <div className="overflow-visible p-1">
              <Card className="box-border flex aspect-square overflow-visible rounded-none border-4 border-black drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] transition hover:drop-shadow-[16px_25px_0px_rgba(0,0,0,1)] dark:border-white dark:drop-shadow-[10px_10px_0px_rgba(255,255,255,1)] dark:hover:drop-shadow-[16px_25px_0px_rgba(255,255,255,1)]">
                <CardHeader className="font-mono font-black tracking-tighter">
                  {card.title} <div>{card.description}</div>
                </CardHeader>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                  {card.skills.map((skill) => (
                    <span className="text-3xl font-semibold">{skill}</span>
                  ))}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
