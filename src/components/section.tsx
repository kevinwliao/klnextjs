import { ReactNode } from "react";

type SectionProps = React.ComponentPropsWithoutRef<"section">;

export default function Section({ id, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className="h-screen w-screen even:bg-white odd:bg-blue-200 dark:even:bg-slate-900 dark:odd:bg-blue-950 px-4 py-10 xl:px-72 xl:py-32 snap-start"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl xl:text-8xl font-bold tracking-tight">
          Header
        </h1>
        {children}
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          ipsam veniam! Necessitatibus debitis nulla provident quis quas,
          pariatur atque nostrum, sed aliquam illum placeat ratione, soluta
          quos. Voluptatem, at enim.
        </p>
      </div>
    </section>
  );
}
