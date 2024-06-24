import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// for inline links
type AProps = ComponentPropsWithoutRef<"a">;

export default function A({ href, children, className, ...props }: AProps) {
  return (
    <>
      <a
        className={cn(
          "text-cyan-500 underline underline-offset-4 hover:text-purple-500",
          className,
        )}
        href={href}
        target="_blank"
        rel="noreferrer nofollow"
      >
        {children}
      </a>
    </>
  );
}
