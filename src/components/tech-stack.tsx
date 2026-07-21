"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { MoveRight } from "lucide-react";
import { techStack } from "@/lib/data";

const ACCENTS = ["var(--color-accent)", "var(--color-secondary)"];

function TechCard({ name, index }: { name: string; index: number }) {
  const [imageError, setImageError] = useState(false);
  const imagePath = `/tech/${name.toLowerCase().replace(/[^a-z0-9-]/g, "")}.png`;

  return (
    <div className="flex h-40 w-[220px] shrink-0 flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:h-44 sm:w-[250px]">
      <div className="flex items-start justify-between">
        <div
          className="h-1 w-8 rounded-full mt-2"
          style={{ backgroundColor: ACCENTS[index % 2] }}
        />
        {!imageError && (
          <div className="relative h-8 w-8 shrink-0">
            <Image
              src={imagePath}
              alt={`${name} logo`}
              fill
              sizes="32px"
              className="object-contain"
              onError={() => setImageError(true)}
              unoptimized // useful for local dev and static exports if configured, but normal Next.js Image fits well
            />
          </div>
        )}
      </div>
      <div>
        <span className="font-mono text-xs text-[var(--color-muted)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-1 font-display text-xl font-medium tracking-tight sm:text-2xl">
          {name}
        </p>
      </div>
    </div>
  );
}

export function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Scroll buffer to allow the spring animation to settle before unsticking
  const scrollBuffer = 200;

  useLayoutEffect(() => {
    function measure() {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setTravel(Math.max(trackWidth - viewportWidth + 96, 0));
      setViewportHeight(window.innerHeight);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // Calculate the progress limit so the translation finishes before the end of the scroll section
  const progressLimit = travel && scrollBuffer ? travel / (travel + scrollBuffer) : 1;

  const x = useTransform(smoothProgress, [0, progressLimit], [0, -travel]);
  const hintOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

  if (prefersReducedMotion) {
    return (
      <section id="stack" className="px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs text-[var(--color-accent)]">02 / Toolbox</span>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Tech Stack
          </h2>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
            {techStack.map((name, i) => (
              <TechCard key={name} name={name} index={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="relative"
      style={{
        height:
          travel && viewportHeight
            ? `${travel + viewportHeight + scrollBuffer}px`
            : "220vh",
      }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[var(--color-accent)]"> Toolbox</span>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
                Tech Stack
              </h2>
            </div>
            <motion.div
              style={{ opacity: hintOpacity }}
              className="flex items-center gap-2 font-mono text-xs text-[var(--color-muted)]"
            >
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-12 flex gap-5 pl-6 lg:pl-12"
        >
          {techStack.map((name, i) => (
            <TechCard key={name} name={name} index={i} />
          ))}
          <div className="w-6 shrink-0 sm:w-12" />
        </motion.div>
      </div>
    </section>
  );
}
