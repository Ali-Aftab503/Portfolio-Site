import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialSidebar from "@/components/SocialSidebar";
export default function Home() {
  return (
    <main>
      <SocialSidebar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
