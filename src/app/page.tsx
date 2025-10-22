import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialSidebar from "@/components/SocialSidebar";
export default function Home() {
  return (
    <main>
      <SocialSidebar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}