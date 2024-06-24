import LinkPreview from "@/lib/data";
export default function Writing() {
  return (
    <div
      id="1"
      className="min-h-screen snap-start px-4 py-32 odd:bg-blue-200 even:bg-white dark:odd:bg-blue-900 dark:even:bg-slate-900 xl:px-72 xl:py-32"
    >
      <h1 className="mb-5 text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
        Writing
      </h1>
      {/* @ts-expect-error Async Server Component */}
      <LinkPreview url="https://www.nytimes.com/2018/12/11/smarter-living/the-edit-k-pop.html"></LinkPreview>
      {/* @ts-expect-error Async Server Component */}
      <LinkPreview url="https://www.nytimes.com/2018/08/28/smarter-living/the-edit-contributors.html" />
    </div>
  );
}
