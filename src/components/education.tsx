"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

function EduCard({ item, index }: { item: (typeof education)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      data-cursor-hover
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
      className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--color-secondary)]/10 blur-2xl" />
      <div className="relative flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
          <GraduationCap size={18} />
        </span>
        <span className="font-mono text-xs text-[var(--color-muted)]">{item.year}</span>
      </div>
      <h3 className="relative mt-5 font-display text-lg font-medium leading-snug">
        {item.title}
      </h3>
      <p className="relative mt-1 text-sm text-[var(--color-secondary)]">{item.org}</p>
      <p className="relative mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
        {item.description}
      </p>
    </motion.div>
  );
}

export function Education() {
  return (
    <section id="education" className="px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs text-[var(--color-secondary)]"> Education</span>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          How I Got Here
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, i) => (
            <EduCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
