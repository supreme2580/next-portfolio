import React from "react";
import Image from "next/image";
import profile from "@/public/profilepic.png";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const HomeSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center align-middle"
      id="home"
    >
      <Image
        priority={true}
        src={profile}
        alt="profile"
        width={200}
        height={200}
        className="self-center rounded-full relative h-72 w-60"
      />
      <div className="pb-4 pt-8 sm:pt-10 text-3xl">
        Hi, I&apos;m Victor <span className="wave ml-1">👋</span>
      </div>
      <div className="text-justify text-lg tracking-tight mb-7">
        Greetings, I am Victor Omorogbe, and I derive immense pleasure from the craft of crafting digital entities that find their home on the vast expanse of the World Wide Web. My passion lies in the art of conceiving, designing, and nurturing these virtual creations, which come to life in the boundless realm of the internet.
      </div>
      <div className="flex flex-row gap-5">
        <Link
          href="https://github.com/supreme2580"
          className="hover:text-secondary"
          target="_blank"
        >
          <Github strokeWidth={1} size={40} />
        </Link>
        <Link
          href="https://twitter.com/victoromorogbe3"
          className="hover:text-secondary"
          target="_blank"
        >
          <Twitter strokeWidth={1} size={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/victor-omorogbe-a902a0245/"
          className="hover:text-secondary"
          target="_blank"
        >
          <Linkedin strokeWidth={1} size={40} />
        </Link>
      </div>
    </section>
  );
};
