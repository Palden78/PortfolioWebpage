import Navbar from "@/components/Navbar";
import ProjectsHero from "@/components/ProjectsHero";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#e9dfcc] text-[#3b3025]">
      <Navbar />

      <ProjectsHero />

      <Projects />
    </main>
  );
}