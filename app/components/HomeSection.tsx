import React from "react";
import Image from "next/image";
import profile from "@/public/profilepic.png";

type HomeProps = {
  views: number;
};

export const HomeSection = ({ views }: HomeProps) => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center align-middle"
      id="home"
    >
      <Image
        src={profile}
        alt="profile"
        width={200}
        height={200}
        className="self-center rounded-full"
      />
      <div className="pb-4 pt-8 sm:pt-10 text-3xl">
        hi, I'm Luis <span className="wave ml-1">👋</span>
      </div>
      <div className="text-justify text-lg tracking-tight mb-12">
        I am a fresh graduate from{" "}
        <span className="text-[#031090]">the Ateneo de Manila University</span>{" "}
        and I majored in Computer Science. Currently I am a L0.5 Software
        Engineer a.k.a <b>Aspiring Software Engineer</b>.
      </div>
      {/* <div>Website Visitors: {views}</div> */}
    </section>
  );
};
