import Tech from "@/components/tech";
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
      className="min-h-screen snap-start border-b-4 border-slate-950 px-4 py-32 odd:bg-blue-200 even:bg-white dark:border-slate-50 dark:odd:bg-blue-900 dark:even:bg-slate-900 md:px-24 lg:px-48 xl:px-72 xl:py-24"
    >
      <div className="mb-2 sm:mb-8">
        <h1 className="mb-3 text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
          About Me
        </h1>
        <p className="mb-4 text-lg sm:text-xl md:w-3/4">
          Hi, I&apos;m Kevin! I&apos;m a budding designer who draws on a vast
          and varied toolset to build connections with the world.
        </p>{" "}
        <p className="mb-4 text-lg sm:text-xl md:w-3/4">
          I&apos;ve written for{" "}
          <span className="italic">The New York Times</span>, and my artwork has
          been displayed in the Museum of Contemporary Art San Diego.
        </p>
        <p className="mb-4 text-lg sm:text-xl md:w-3/4">
          I&apos;m a 2024 new graduate of Stanford University, with a B.S. in
          Symbolic Systems. There, I was a recipient of the Chadrakant and S.
          Patel Bhakta Scholarship Fund, and was nominated for the Boothe Prize
          for excellence in writing and rhetoric.
        </p>
      </div>
      <div>
        <h2 className="text-4xl font-bold uppercase tracking-tight">CONTACT</h2>
        {
          <ul className="mt-4 flex gap-4">
            {arr.map((social, i) => (
              <div
                key={i}
                className="dark:hover:slate-950 p-2 hover:bg-slate-950 hover:text-slate-50 dark:hover:bg-slate-50"
              >
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
