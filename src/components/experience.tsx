"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <span className="font-mono text-xs text-[var(--color-accent)]"> Experience</span>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Where I&apos;ve Worked
        </h2>

        <div className="relative mt-16 pl-8">
          <div className="absolute left-0 top-2 h-[calc(100%-2rem)] w-px bg-[var(--color-border)]" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-secondary)]"
          />

          <div className="space-y-16">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[2.35rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] text-[var(--color-accent)]">
                  <Briefcase size={11} />
                </div>
                <span className="font-mono text-xs text-[var(--color-muted)]">{item.year}</span>
                <h3 className="mt-1 font-display text-xl font-medium">{item.title}</h3>
                <p className="mt-0.5 text-sm text-[var(--color-accent)]">{item.org}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
