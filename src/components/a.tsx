import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// for inline links
type AProps = ComponentPropsWithoutRef<"a">;

export default function A({
  href,
  children,
  className,
  target = "_blank",
  ...props
}: AProps) {
  return (
    <>
      <a
        className={cn(
          "text-cyan-500 underline underline-offset-4 hover:text-purple-500",
          className,
        )}
        href={href}
        target={target}
        rel="noreferrer nofollow"
      >
        {children}
      </a>
    </>
  );
}
