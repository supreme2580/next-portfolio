import { ReportView } from "./components/ReportView";
import { Redis } from "@upstash/redis";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

export const revalidate = 60;

const redis = Redis.fromEnv();

export default async function Home() {
  const views = (await redis.get<number>(["profileViews"].join(":"))) ?? 0;
  return (
    <div className="antialiased max-w-2xl mb-28 flex flex-col mx-8 md:mx-auto">
      <ReportView />

      <main className="flex-auto min-w-0 flex flex-col px-2 sm:px-0">
        <HomeSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
      </main>
      <Footer views={views} />
    </div>
  );
}
