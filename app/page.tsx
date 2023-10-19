import { ReportView } from "./components/ReportView";
import { Redis } from "@upstash/redis";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";

export const revalidate = 60;

const redis = Redis.fromEnv();

export default async function Home() {
  // const views = (await redis.get<number>(["profileViews"].join(":"))) ?? 0;
  const views = 0;
  return (
    <div className="antialiased max-w-2xl mb-40 flex flex-col mx-14 md:mx-auto">
      {/* <ReportView /> */}

      <main className="flex-auto min-w-0 flex flex-col px-2 sm:px-0">
        <HomeSection views={views} />
        <AboutSection />
        <h1 className="text-3xl min-h-screen" id="work">
          Work Experience
        </h1>
        <h1 className="text-3xl min-h-screen" id="projects">
          Projects
        </h1>
      </main>
    </div>
  );
}
