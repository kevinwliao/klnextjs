import LinkPreview from "@/lib/data";
export default function Writing() {
  return (
    <div
      id="1"
      className="min-h-screen even:bg-white odd:bg-blue-200 dark:even:bg-slate-900 dark:odd:bg-blue-900 px-4 py-32 xl:px-72 xl:py-32 snap-start"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight font-bold mb-5 text-balance">
        Writing
      </h1>
      {/* @ts-expect-error Async Server Component */}
      <LinkPreview url="https://www.nytimes.com/2018/12/11/smarter-living/the-edit-k-pop.html"></LinkPreview>
      {/* @ts-expect-error Async Server Component */}
      <LinkPreview url="https://www.nytimes.com/2018/08/28/smarter-living/the-edit-contributors.html" />
    </div>
  );
}
