import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

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
    <ul className="flex gap-4 mt-4">
      {arr.map((social) => (
        <Link href="url">{social.icon}</Link>
      ))}
    </ul>
  );
}
