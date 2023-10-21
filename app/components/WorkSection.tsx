import { placesWorkedData } from "@/constants/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

export const WorkSection = () => {
  return (
    <section className="flex flex-col justify-center align-middle sm:gap-6 gap-16" id="work">
      <div className="pb-4 sm:pb-2 sm:pl-4 text-3xl mt-10">Experience</div>
      {placesWorkedData.map((place, index) => (
        <PlaceWorked
          key={"place" + index}
          link={place.link}
          date={place.date}
          position={place.position}
          company={place.company}
          description={place.description}
          technologies={place.technologies}
        />
      ))}
    </section>
  );
};