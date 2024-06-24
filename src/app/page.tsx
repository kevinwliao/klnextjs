import Section from "@/components/section";
import Home from "@/components/home";
import About from "@/components/about";
import Web from "@/components/web";
import Writing from "@/components/writing";

const items = ["Home", "About", "Web", "Sound", "Writing"];

export default function Page() {
  return (
    <main className="">
      <Home></Home>
      <About></About>
      <Web></Web>
      <Writing></Writing>
    </main>
  );
}
