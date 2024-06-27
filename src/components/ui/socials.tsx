import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import A from "@/components/a";

const arr = [
  {
    name: "Github",
    icon: <Github></Github>,
    url: "https://github.com/",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin></Linkedin>,
    url: "https://linkedin.com/",
  },
];

export default function Socials() {
  return (
    <ul className="mt-4 flex gap-4">
      {arr.map((social) => (
        <A href={social.url}>{social.icon}</A>
      ))}
    </ul>
  );
}
