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
      <div className="relative max-w-full grow overflow-scroll overflow-x-visible">
        <div>
          <LinkPreview url="https://www.nytimes.com/2018/12/11/smarter-living/the-edit-k-pop.html"></LinkPreview>
          <LinkPreview url="https://www.nytimes.com/2018/08/28/smarter-living/the-edit-contributors.html" />
          <LinkPreview url="https://www.nytimes.com/2018/10/02/smarter-living/the-edit-consent-kavanaugh.html"></LinkPreview>
        </div>
        {/* <div className="sticky bottom-0 h-16 w-full bg-gradient-to-t from-blue-200 to-transparent dark:from-blue-950"></div> */}
      </div>
    </div>
  );
}
