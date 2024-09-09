import Tech from "@/components/tech";
export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen snap-start border-b-4 border-slate-950 px-4 py-32 odd:bg-blue-200 even:bg-white dark:border-slate-50 dark:odd:bg-blue-950 dark:even:bg-slate-900 md:px-24 lg:px-48 xl:px-72 xl:py-24"
    >
      <h1 className="mb-4 text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
        Skills
      </h1>
      <Tech></Tech>
      <h2 className="mb-4 text-3xl font-semibold uppercase tracking-tight md:text-4xl">
        Media
      </h2>
      <ul className="list-inside list-disc">
        <li>Interviewing, writing, journalism</li>
        <li>Cultural commentary</li>
        <li>Audio and music production, sound design</li>
        <li>Fine art</li>
      </ul>
    </div>
  );
}
