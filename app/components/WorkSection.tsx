import { ArrowUpRight } from "lucide-react";
import React from "react";

export const WorkSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center align-middle gap-4"
      id="work"
    >
      <div className="pb-4 sm:pb-2 sm:pl-4 text-3xl">Experience</div>
      <PlaceWorked
        link="https://thinkingmachin.es/"
        date="Jun 2023 ─ Aug 2023"
        position="Software Engineering Intern"
        company="Thinking Machines Data Science"
        description="Developed an internal tool for the company. The tool allows users to create and manage projects, and to track the progress of each project."
        technologies={[
          "React",
          "Typescript",
          "NextJS",
          "TailwindCSS",
          "shadcn/ui",
          "Prisma",
          "Docker",
        ]}
      />
      <PlaceWorked
        link="https://embiggengroup.com/"
        date="Apr 2022 ─ May 2023"
        position="Web Development Intern"
        company="Embiggen"
        description="Developed an expert consultation platform for the company. The platform allows users to book consultations with experts in various fields."
        technologies={[
          "Javascript",
          "Embedded Javascript (EJS)",
          "MongoDB",
          "Node.js",
          "ExpressJS",
        ]}
      />
      <PlaceWorked
        link="https://www.facebook.com/codingschoolph"
        date="Dec 2021 ─ Jun 2022"
        position="Coach"
        company="The Coding School"
        description="I taught kids aged 8-18 computer science concepts through Scratch. Additionally, I provided instruction in the field of game development."
        technologies={["Unity", "C#"]}
      />
    </section>
  );
};

const PlaceWorked = ({
  link,
  date,
  position,
  company,
  description,
  technologies,
}: {
  link: string;
  date: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="text-lg tracking-tight mb-4 flex sm:flex-row flex-col sm:p-4 sm:hover:shadow-xl rounded-xl relative group transition-colors duration-300 ease-in-out sm:hover:bg-primary sm:hover:text-background"
    >
      <ArrowUpRight
        size={18}
        className="absolute top-0 right-0 sm:mt-4 mt-2 sm:mr-4 mr-2 bg-secondary sm:group-hover:bg-primary sm:group-hover:text-secondary rounded"
      />
      <div className="sm:w-1/3 text-sm text-accent text-left">{date}</div>
      <div className="text-xl sm:ml-5">
        {position} • {company}
        <div className="text-[15px] py-2">{description}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <div className="sm:group-hover:bg-secondary sm:group-hover:text-primary bg-primary text-secondary px-3 py-1 rounded-2xl text-[12px]">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};
