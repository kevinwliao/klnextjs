import LinkPreview from "@/lib/data";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-40">
      {/* @ts-expect-error Async Server Component */}
      <LinkPreview url="https://www.nytimes.com/2018/12/11/smarter-living/the-edit-k-pop.html"></LinkPreview>
      {/* @ts-expect-error Async Server Component */}
      <LinkPreview url="https://www.nytimes.com/2018/08/28/smarter-living/the-edit-contributors.html" />
    </div>
  );
}
