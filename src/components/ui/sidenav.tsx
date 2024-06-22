import Link from "next/link";
const items = ["Home", "Web", "Sound", "Writing", "About"];

export default function Sidenav() {
  return (
    <nav className="fixed left-6 h-screen">
      <ul className="h-full flex flex-col justify-center p-4 gap-4 font-medium text-2xl tracking-tighter">
        {items.map((item) => (
          <li>
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
