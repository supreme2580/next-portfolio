"use client";

import { useEffect, useState } from "react";
import { Briefcase, FolderGit2, Home, UserCircle2 } from "lucide-react";
import {
  MotionValue,
  useAnimation,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function NavBar() {
  let mouseX = useMotionValue(Infinity);
  const sectionId = ["home", "about", "work", "projects"];
  const controls = useAnimation();
  const [scrolling, setScrolling] = useState(false);

  const showDuration = 2000; // Adjust this value to control how long the navbar is visible (in milliseconds)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (!scrolling) {
          setScrolling(true);
          controls.start({ y: 0 }); // Use linear easing
        }
      } else {
        if (scrolling) {
          setScrolling(false);
          controls.start({ y: 100 }); // Use linear easing
          // Automatically hide the navbar after a set duration
          setTimeout(() => {
            controls.start({ y: 100 }); // Animate it out of view
          }, showDuration);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, scrolling]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={controls}
      className="fixed z-50 w-full bottom-3 flex justify-center "
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="glass-navbar inline-flex flex-row rounded-t-md justify-center p-5 gap-8"
      >
        {sectionId.map((section, i) => (
          <AppIcon
            mouseX={mouseX}
            key={i}
            sectionId={section}
            onClick={() => {
              scrollToSection(section);
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

function AppIcon({
  mouseX,
  sectionId,
  onClick,
}: {
  mouseX: MotionValue;
  sectionId: string;
  onClick: () => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div ref={ref} style={{ width }} onClick={onClick}>
      {sectionId === "home" ? <Home height={width} width={width} /> : null}
      {sectionId === "about" ? (
        <UserCircle2 height={width} width={width} />
      ) : null}
      {sectionId === "work" ? <Briefcase height={width} width={width} /> : null}
      {sectionId === "projects" ? (
        <FolderGit2 height={width} width={width} />
      ) : null}
    </motion.div>
  );
}
