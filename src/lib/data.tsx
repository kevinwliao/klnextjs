"use server";
import Link from "next/link";
import Image from "next/image";
import { JSDOM } from "jsdom";

type metaTagsType = {
  [name: string]: string;
};

const extractMetaTags = async (url: string) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
      (tags: metaTagsType, meta) => {
        const name =
          meta.getAttribute("name") ||
          meta.getAttribute("property") ||
          meta.getAttribute("itemprop");
        const content = meta.getAttribute("content");

        if (name && content) {
          tags[name] = content;
        }

        return tags;
      },
      {},
    );

    return {
      title:
        document.title || metaTags["og:title"] || metaTags["twitter:title"],
      description:
        metaTags.description ||
        metaTags["og:description"] ||
        metaTags["twitter:description"],
      image:
        metaTags.image || metaTags["og:image"] || metaTags["twitter:image"],
    };
  } catch (error) {
    console.error("Error fetching Open Graph details", error);
  }
};

async function LinkPreview({ url }: { url: string }) {
  //here calling the function
  const data = await extractMetaTags(url);

  if (!data) {
    return <p>"Failed to fetch link preview."</p>;
  }

  return (
    <Link href={url} target="_blank" className="">
      <div className="flex justify-between gap-4 border-b-4 border-slate-950 py-4 dark:border-slate-50">
        <div className="flex w-2/3 flex-col justify-start gap-4">
          <h3
            className={
              "text-serif text-xl font-bold uppercase tracking-tight md:text-2xl"
            }
          >
            {data.title}
          </h3>
          {/* <p className="text-xl text-slate-800 dark:text-white">
            {data.description}
          </p> */}
          <span className="break-words text-lg text-slate-600 dark:text-slate-400">
            {url}
          </span>
        </div>
        <div className="relative inline-block h-32 w-60">
          <Image
            src={data.image}
            alt="Link Preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export default LinkPreview;
