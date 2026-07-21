"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { ScrambleText } from "./scramble-text";
import { Magnetic } from "./magnetic";
import { RoleFlip } from "./role-flip";
import { HeroAvatar } from "./hero-avatar";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 lg:px-12"
    >
      <div
        ref={gridRef}
        className="grid-bg pointer-events-none absolute inset-[-5%] transition-transform duration-300 ease-out"
      />

      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[var(--color-accent)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-10%] bottom-[5%] h-[380px] w-[380px] rounded-full bg-[var(--color-secondary)]/15 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          {profile.available && (
            <motion.div
              variants={item}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-1.5 text-xs text-[var(--color-muted)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              Available for work
            </motion.div>
          )}

          <motion.h1
            variants={item}
            className="font-display text-[15vw] font-medium leading-[0.95] tracking-tight sm:text-[10vw] lg:text-[5.2vw]"
          >
            <ScrambleText text={profile.name.toUpperCase()} delay={200} />
          </motion.h1>

          <motion.div variants={item} className="mt-6 max-w-2xl">
            <p className="font-display text-2xl leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <RoleFlip />
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#projects"
                data-cursor-hover
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-transform"
              >
                View Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
              >
                Resume
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <HeroAvatar />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-muted)]"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
