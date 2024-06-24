import Skills from "@/components/skills";
import A from "@/components/a";
export default function About() {
  return (
    <div
      id="1"
      className="min-h-screen snap-start border-b-4 border-slate-950 px-4 py-32 odd:bg-blue-200 even:bg-white dark:border-slate-50 dark:odd:bg-blue-900 dark:even:bg-slate-900 xl:px-72 xl:py-32"
    >
      <h1 className="mb-5 text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
        About Me
      </h1>
      <p className="mb-4 text-lg sm:text-xl md:w-3/4">
        Hey, I'm Kevin! I'm a 2024 Stanford graduate, where I earned a degree in{" "}
        <A href="https://symsys.stanford.edu/">Symbolic Systems</A> and a
        concentration in Computer Music. As a developer, I'm excited about
        cutting-edge front-end technology and continuing to integrate my
        interdisciplinary technical and creative background into my workflow.
      </p>
      <p className="mb-4 text-lg sm:text-xl md:w-3/4">
        I'm also a bluegrass banjo player and a writer, with work published in{" "}
        <span className="underline decoration-2 underline-offset-4">
          The New York Times
        </span>{" "}
        .
      </p>
      <p className="mb-4 text-2xl md:w-3/4"></p>
      <Skills></Skills>
    </div>
  );
}
