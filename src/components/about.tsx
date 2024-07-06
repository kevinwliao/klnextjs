import Tech from "@/components/tech";
import Socials from "@/components/ui/socials";
import { Github, Linkedin } from "lucide-react";
import A from "@/components/a";

const arr = [
  {
    name: "Github",
    icon: <Github size="32"></Github>,
    url: "https://github.com/kevinwliao",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size="32"></Linkedin>,
    url: "https://www.linkedin.com/in/kevin-l-87084b16b/",
  },
];

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen snap-start border-b-4 border-slate-950 px-4 py-32 odd:bg-blue-200 even:bg-white dark:border-slate-50 dark:odd:bg-blue-900 dark:even:bg-slate-900 xl:px-72 xl:py-32"
    >
      <div className="mb-2 sm:mb-8">
        <h1 className="mb-3 text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
          About Me
        </h1>
        <p className="mb-4 text-lg sm:text-xl md:w-3/4">
          Hey, I'm Kevin! I'm a 2024 Stanford University graduate, where I
          earned a degree in{" "}
          <A href="https://symsys.stanford.edu/">Symbolic Systems</A> with a
          concentration in Computer Music. As a developer, I'm excited about
          cutting-edge front-end technology and continuing to integrate my
          interdisciplinary technical and creative background into my workflow.
        </p>
        <p className="mb-4 text-lg sm:text-xl md:w-3/4">
          I'm also a bluegrass banjo player and a writer, with{" "}
          <A href="/#writing" target="_self">
            works published in The New York Times
          </A>{" "}
          .
        </p>
      </div>
      <div>
        <h2 className="text-4xl font-bold uppercase tracking-tight">CONTACT</h2>
        {
          <ul className="mt-4 flex gap-4">
            {arr.map((social) => (
              <div className="dark:hover:slate-950 p-2 hover:bg-slate-950 hover:text-slate-50 dark:hover:bg-slate-50">
                <A
                  className="text-inherit hover:text-inherit"
                  href={social.url}
                >
                  {social.icon}
                </A>
              </div>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
