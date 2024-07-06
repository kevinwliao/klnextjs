import Tech from "@/components/tech";
export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen snap-start border-b-4 border-slate-950 px-4 py-32 odd:bg-blue-200 even:bg-white dark:border-slate-50 dark:odd:bg-blue-950 dark:even:bg-slate-900 xl:px-72 xl:py-32"
    >
      <h1 className="mb-4 text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
        Skills
      </h1>
      <Tech></Tech>
      <h2 className="mb-4 text-4xl font-semibold uppercase tracking-tight md:text-5xl">
        Multimedia
      </h2>
      <ul className="list-inside list-disc">
        <li>Interviewing, Writing, Journalism</li>
        <li>Audio and Music Production, Sound Design, Music Composition</li>
        <li>Data Visualization, Data Sonification</li>
        <li>Creative Coding</li>
      </ul>
    </div>
  );
}
