import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

export default async function Home() {
  return (
    <div className="antialiased max-w-2xl mb-36 flex flex-col mx-8 md:mx-auto">
      <main className="flex-auto min-w-0 flex flex-col px-2 sm:px-0">
        <HomeSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
