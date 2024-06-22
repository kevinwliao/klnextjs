"use client";
// example of client component with server children

export default function Pieces({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
