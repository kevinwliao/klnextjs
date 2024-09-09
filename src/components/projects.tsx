import ProjectContainer from "@/components/projectContainer";
export default function Web() {
  return (
    <div
      id="projects"
      className="flex min-h-screen snap-start flex-col overflow-visible border-b-4 border-slate-950 px-4 py-32 odd:bg-blue-200 even:bg-white dark:border-slate-50 dark:odd:bg-blue-950 dark:even:bg-slate-900 md:px-24 lg:px-48 xl:px-72 xl:py-24"
    >
      <h1 className="mb-4 text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
        Projects
      </h1>
      <ProjectContainer></ProjectContainer>
    </div>
  );
}
