import LinkPreview from "@/lib/data";
export default function Writing() {
  return (
    <div
      id="writing"
      className="flex h-screen snap-start flex-col border-b-4 border-slate-950 px-4 py-32 odd:bg-blue-200 even:bg-white dark:border-slate-50 dark:odd:bg-blue-950 dark:even:bg-slate-900 xl:px-72 xl:py-32"
    >
      <h1 className="mb-4 inline text-balance text-5xl font-bold uppercase tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
        Writing &
      </h1>
      <div className="overflow-scroll">
        {/* @ts-expect-error Async Server Component */}
        <LinkPreview url="https://www.nytimes.com/2018/12/11/smarter-living/the-edit-k-pop.html"></LinkPreview>
        {/* @ts-expect-error Async Server Component */}
        <LinkPreview url="https://www.nytimes.com/2018/08/28/smarter-living/the-edit-contributors.html" />
        {/*@ts-ignore*/}
        <LinkPreview url="https://www.nytimes.com/2018/10/02/smarter-living/the-edit-consent-kavanaugh.html"></LinkPreview>
      </div>
    </div>
  );
}
