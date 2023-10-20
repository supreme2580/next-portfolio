"use client";

import { Briefcase, FolderGit2, Home, UserCircle2 } from "lucide-react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";

export default function NavBar() {
  let mouseX = useMotionValue(Infinity);
  const sectionId = ["home", "about", "work", "projects"];

  return (
    <motion.div className="fixed z-50 w-full bottom-3 flex justify-center">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="glass-navbar inline-flex flex-row rounded-t-md justify-center p-5 gap-8"
      >
        {sectionId.map((section, i) => (
          <AppIcon mouseX={mouseX} key={i} sectionId={section} />
        ))}
      </motion.div>
    </motion.div>
  );
}

function AppIcon({
  mouseX,
  sectionId,
}: {
  mouseX: MotionValue;
  sectionId: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onClick={() => {
        scrollToSection(sectionId);
        setTimeout(() => {
          mouseX.set(Infinity);
        }, 500);
      }}
    >
      {sectionId === "home" ? (
        <Home id={"homenav"} strokeWidth={0.8} className="w-full h-full" />
      ) : null}
      {sectionId === "about" ? (
        <UserCircle2
          id={"aboutnav"}
          className="w-full h-full"
          strokeWidth={0.8}
        />
      ) : null}
      {sectionId === "work" ? (
        <Briefcase id={"worknav"} strokeWidth={0.8} className="w-full h-full" />
      ) : null}
      {sectionId === "projects" ? (
        <FolderGit2
          id={"projectsnav"}
          strokeWidth={0.8}
          className="w-full h-full"
        />
      ) : null}
      <Tooltip
        id={sectionId}
        place="top"
        noArrow={true}
        anchorSelect={`#${sectionId}nav`}
        className="bg-primary text-secondary rounded-lg p-2"
      >
        {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
      </Tooltip>
    </motion.div>
  );
}

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

//Credits to https://buildui.com/recipes/magnified-dock/ for the navbar animation
