import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const WorkSection = () => {
  return (
    <section
      className=" flex flex-col justify-center align-middle sm:gap-6 gap-16"
      id="work"
    >
      <div className="pb-4 sm:pb-2 sm:pl-4 text-3xl mt-10">Experience</div>
      <PlaceWorked
        link="https://www.daobox.app/"
        date="2023 ─ PRESENT"
        position="Frontend Developer"
        company="Daobox"
        description="We are a development studio working at the intersection of blockchain and artificial intelligence. Our objective is to ensure that DAOs are within the reach of all communities, fostering a governance framework that is transparent and inclusive for individuals and organizations alike."
        technologies={["React", "NextJS", "TailwindCSS", "Typescript", "Wagmi", "Cypress"]}
      />
      <PlaceWorked
        link="https://www.bankless.community/"
        date="2021 ─ PRESENT"
        position="Software Developer"
        company="Bankless Dao"
        description="A decentralized autonomous organization that acts as a steward of the Bankless Movement progressing the world towards a future of greater freedom."
        technologies={[
          "React",
          "Typescript",
          "NextJS",
          "TailwindCSS",
          "DiscordJS",
          "NodeJS"
        ]}
      />
      <PlaceWorked
        link="https://igowithigho.org/"
        date="July 2022 ─ October 2022"
        position="Software Developer"
        company="iGOwithIGHO"
        description="We are passionate about international students, and our goal is to connect prospective international students to universities and colleges abroad."
        technologies={[
          "NextJS",
          "Tailwindcss",
          "Javascript",
          "Sanity",
          "Wordpress",
        ]}
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
    <Link
      href={link}
      target="_blank"
      className="text-lg tracking-tight mb-4 flex sm:flex-row flex-col sm:p-6 sm:hover:shadow-xl rounded-xl relative group transition-colors duration-300 ease-in-out sm:hover:bg-primary sm:hover:text-background"
    >
      <ArrowUpRight
        size={18}
        className="absolute top-0 right-0 sm:mt-4 mt-2 sm:mr-4 mr-2 bg-secondary sm:group-hover:bg-primary sm:group-hover:text-secondary rounded"
      />
      <div className="sm:w-1/4 text-sm text-accent text-left">{date}</div>
      <div className="sm:w-3/4 text-xl sm:ml-5">
        {position} • {company}
        <div className="text-[15px] py-2">{description}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <div
              key={"work" + index}
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
