import Section from "@/components/section";
import Home from "@/components/home";
import About from "@/components/about";
import Web from "@/components/projects";
import Writing from "@/components/writing";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

const items = ["Home", "About", "Web", "Sound", "Writing"];

export default function Page() {
  return (
    <main className="overflow-visible">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Web></Web>
      <Writing></Writing>
      <Footer></Footer>
    </main>
  );
}
