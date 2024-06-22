import { ReactNode } from "react";

export default function Section({ children }: { children?: ReactNode }) {
  return (
    <section className="h-screen even:bg-white odd:bg-blue-100 px-96 py-32 snap-start">
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl font-bold tracking-tighter">Header</h1>
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
