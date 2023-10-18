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
        <Home strokeWidth={0.8} height={width} width={width} />
      ) : null}
      {sectionId === "about" ? (
        <UserCircle2 strokeWidth={0.8} height={width} width={width} />
      ) : null}
      {sectionId === "work" ? (
        <Briefcase strokeWidth={0.8} height={width} width={width} />
      ) : null}
      {sectionId === "projects" ? (
        <FolderGit2 strokeWidth={0.8} height={width} width={width} />
      ) : null}
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
