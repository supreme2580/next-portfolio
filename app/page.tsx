import { ReportView } from "./components/ReportView";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

const redis = Redis.fromEnv();

export default async function Home() {
  const views = (await redis.get<number>(["profileViews"].join(":"))) ?? 0;
  return (
    <div className="antialiased max-w-2xl mb-40 flex flex-col mx-4 md:mx-auto">
      <ReportView />
      <main className="flex-auto min-w-0 flex flex-col px-2 sm:px-0">
        <section
          className="min-h-screen flex flex-col justify-center align-middle"
          id="home"
        >
          <div className="pb-4 text-3xl">hi, I'm Luis 👋</div>
          <div className="text-justify text-lg tracking-tight">
            I am a fresh graduate from{" "}
            <span className="text-[#031090]">
              the Ateneo de Manila University
            </span>{" "}
            and I majored in Computer Science. Currently I am a L0.5 Software
            Engineer a.k.a Aspiring Software Engineer.
          </div>
          <div>Website Visitors: {views}</div>
        </section>
        <h1 className="text-3xl min-h-screen" id="about">
          About
        </h1>
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
