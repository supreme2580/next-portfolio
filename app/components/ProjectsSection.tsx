import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import coamaker from "@/public/coamaker.png";
import blueballot from "@/public/blueballot.jpeg";
import pitime from "@/public/pitime.jpeg";
import southbound from "@/public/southbound.png";
import spaceintern from "@/public/spaceintern.png";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section
      className="flex flex-col justify-center align-middle sm:gap-6 gap-16 mt-24"
      id="projects"
    >
      <div className="pb-4 sm:pb-2 sm:pl-4 text-3xl mt-10">Projects</div>
      <Projects
        link="https://coa-maker.vercel.app/"
        image={coamaker}
        title="COA Maker"
        description="A simple tool to generate a Certificate of Authorship for all Computer Science related academic requirements."
        technologies={["React", "Typescript", "NextJS", "Vercel"]}
      />
      <Projects
        link="https://blueballot.theguidon.com/2023/"
        image={blueballot}
        title="Blue Ballot: 2023 SANGGUNIAN GENERAL ELECTIONS"
        description="An interactive that allows users to explore the candidates for the 2022 Sanggunian General Elections."
        technologies={["React", "Tailwind", "Vite"]}
      />
      <Projects
        link="https://twitter.com/PiTimeBot_"
        image={pitime}
        title="PI Time Bot (Discontinued)"
        description="A twitter bot that tweets every Pi Time (3:14 AM/PM)."
        technologies={["Python", "Twitter API"]}
      />
      <Projects
        link="https://2021.spaceappschallenge.org/challenges/statements/the-trail-to-mars-can-you-keep-your-crew-alive/teams/handaka-space-exploration/project"
        image={spaceintern}
        title="Space Intern: Interactive Story RPG"
        description="Was a Finalist in the NASA Global Space Apps Challenge, with the team called HANDAKA SPACE EXPLORATION, representing the city of New York."
        technologies={["Figma"]}
      />
      <Projects
        link=""
        image={southbound}
        title="Southbound"
        description="An endless runner/driver game loosely based on my experiences driving in EDSA."
        technologies={["Unity", "C#"]}
        nolink={true}
      />
    </section>
  );
};

const Projects = ({
  link,
  image,
  title,
  description,
  technologies,
  nolink = false, // Add a 'nolink' prop with a default value of 'false'
}: {
  link: string;
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  nolink?: boolean; // Make 'nolink' optional
}) => {
  return nolink ? (
    <div className="text-lg tracking-tight mb-4 flex sm:flex-row flex-col sm:p-4 sm:hover:shadow-xl rounded-xl relative group transition-colors duration-300 ease-in-out sm:hover:bg-primary sm:hover:text-background">
      <ArrowUpRight
        size={18}
        className="absolute sm:top-0 bottom-0 right-0 sm:mt-4 mt-2 sm:mr-4 mr-2 bg-secondary sm:group-hover:bg-primary sm:group-hover:text-secondary rounded"
      />
      <div className="pb-4 sm:pb-0 sm:w-1/3">
        <Image className="rounded-lg" alt="projectsImage" src={image} />
      </div>

      <div className="text-xl sm:ml-5 sm:w-2/3">
        {title}
        <div className="text-[15px] py-2">{description}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <div
              key={"project" + index}
              className="sm:group-hover:bg-secondary sm:group-hover:text-primary bg-primary text-secondary px-3 py-1 rounded-2xl text-[12px]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Link
      href={link}
      target="_blank"
      className="text-lg tracking-tight mb-4 flex sm:flex-row flex-col sm:p-4 sm:hover:shadow-xl rounded-xl relative group transition-colors duration-300 ease-in-out sm:hover:bg-primary sm:hover:text-background"
    >
      <ArrowUpRight
        size={18}
        className="absolute sm:top-0 bottom-0 right-0 sm:mt-4 mt-2 sm:mr-4 mr-2 bg-secondary sm:group-hover:bg-primary sm:group-hover:text-secondary rounded"
      />
      <div className="pb-4 sm:pb-0 sm:w-1/3">
        <Image className="rounded-lg" alt="projectsImage" src={image} />
      </div>

      <div className="text-xl sm:ml-5 sm:w-2/3">
        {title}
        <div className="text-[15px] py-2">{description}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <div
              key={"project" + index}
              className="sm:group-hover:bg-secondary sm:group-hover:text-primary bg-primary text-secondary px-3 py-1 rounded-2xl text-[12px]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};
