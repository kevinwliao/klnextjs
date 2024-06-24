import ProjectContainer from "@/components/projectContainer";
export default function Web() {
  return (
    <div
      id="2"
      className="flex min-h-screen snap-start flex-col px-4 py-32 odd:bg-blue-200 even:bg-white dark:odd:bg-blue-950 dark:even:bg-slate-900 xl:px-72 xl:py-32"
    >
      <h1 className="mb-5 text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
        Projects
      </h1>
      <ProjectContainer></ProjectContainer>
    </div>
  );
}
