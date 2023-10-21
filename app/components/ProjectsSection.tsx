import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import apple from "@/public/apple-store.png"
import octave from "@/public/octave.png"
import bot from "@/public/treasury-bot.png"
import opencontent from "@/public/opencontent.png"
import hackathon from "@/public/daobox-hackathon-ui.png"
import tribe from "@/public/tribes.webp"

export const ProjectsSection = () => {
  return (
    <section
      className="flex flex-col justify-center align-middle sm:gap-6 gap-16 mt-24"
      id="projects"
    >
      <div className="pb-4 sm:pb-2 sm:pl-4 text-3xl mt-10">Projects</div>
      <Projects
        link="hhttps://apple-store-livid.vercel.app/"
        image={apple}
        title="Apple Store Clone"
        description="A simple apple store landing page clone"
        technologies={["Javascript", "NextJS", "Tailwindcss", "Vercel", "Framer Motion", "Sanity"]}
      />
      <Projects
        link="https://octave-mu.vercel.app/"
        image={octave}
        title="Octave"
        description="A simple social media platform"
        technologies={["NextJs", "Tailwindcss", "Vercel", "Firebase", "Recoil"]}
      />
      <Projects
        link="https://github.com/Spade-Social-Org/spade-treasury-discord-bot"
        image={bot}
        title="Crypto Wallet Tracking And Notification Bot"
        description="This is a specialized crypto bot meticulously designed to monitor blockchain wallet address activity, providing timely notifications to users or designated Discord communities. Its purpose is to keep stakeholders informed of pertinent blockchain events without engaging in trading activities."
        technologies={["NodeJS", "Moralis", "DiscordJS"]}
      />
      <Projects
        link="https://opencontent-studio.vercel.app/"
        image={opencontent}
        title="OpenContent"
        description="This is a decentralized content management system."
        technologies={["NextJS", "Tailwindcss", "EtherJS", "Thegraph Protocol", "Filecoin", "Solidity", "Polygon"]}
      />
      <Projects
        link="https://daoglobal-hackathon-7wqwnwzyx-dao-box.vercel.app/members"
        image={hackathon}
        title="Daobox Hackathon UI"
        description="The user interface for daobox hackathon"
        technologies={["NextJS", "Tailwindcss", "Lens Protocol", "Rainbowkit"]}
        nolink={true}
      />
      <Projects
        link="https://github.com/DAObox/tribeOs"
        image={tribe}
        title="TribeOS"
        description="TribeOS is a Decentralized Autonomous Organization (DAO) building tool built on the aragon OSx"
        technologies={["NextJS", "Tailwindcss", "Aragon", "Lens Protocol"]}
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
