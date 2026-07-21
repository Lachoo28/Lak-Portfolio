"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <span className="font-mono text-xs text-[var(--color-accent)]"> About</span>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          About Me
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <Image
              src="/tech/LG.jpg"
              alt="Lakshan's Portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="font-display text-2xl leading-snug sm:text-3xl">
              I started my journey in software engineering, but quickly realized that
              great products need both thoughtful design and solid technology.
              Somewhere between designing interfaces and building systems, I found my
              space.
            </p>
            <p className="mt-6 max-w-xl text-[var(--color-muted)] leading-relaxed">
              I&apos;m a BSc (Hons) Software Engineering graduate from NSBM Green
              University with a Second Upper Division. I design and develop digital
              products end-to-end - from user research, wireframes, and UI design to
              building responsive frontend experiences and scalable backend solutions.
            </p>
            <p className="mt-4 max-w-xl text-[var(--color-muted)] leading-relaxed">
              Through freelance projects, personal products, and industry experience,
              I&apos;ve worked across UI/UX design, full-stack development, and branding.
              I enjoy turning ideas into practical solutions while focusing on the small
              details that make products feel simple, intuitive, and meaningful.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
