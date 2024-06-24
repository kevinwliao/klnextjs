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
      {}
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
      <div className="flex flex-row border-b py-10 gap-8 justify-between">
        <div className="basis-7/12 md:basis-9/12  flex-none flex flex-col gap-4 justify-start min-w-0">
          <h3
            className={
              "text-xl md:text-3xl text-serif font-bold tracking-tight "
            }
          >
            {data.title}
          </h3>
          {/* <p className="text-slate-800 dark:text-white text-xl">
            {data.description}
          </p> */}
          <span className="text-slate-600 dark:text-slate-400 text-lg">
            {url}
          </span>
        </div>
        <div className="basis-5/12 min-h-32">
          <div className="relative h-full w-full">
            <Image
              src={data.image}
              alt="Link Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LinkPreview;
