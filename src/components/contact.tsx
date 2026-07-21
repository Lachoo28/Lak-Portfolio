"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { profile } from "@/lib/data";
import { Magnetic } from "./magnetic";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    // Open mail composer with pre-filled sender email and standard subject
    window.location.href = `mailto:${profile.email}?subject=Collaboration Inquiry&body=Hi, I would like to get in touch regarding a project. My email address is: ${encodeURIComponent(email)}`;

    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-mono text-xs text-[var(--color-accent)]"> Contact</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-6xl"
        >
          Let&apos;s build something amazing.
        </motion.h2>

        <p className="mx-auto mt-6 max-w-md text-[var(--color-muted)]">
          Have a project in mind, or just want to say hi? My inbox is always open.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
          />
          <Magnetic className="w-full sm:w-auto">
            <button
              type="submit"
              data-cursor-hover
              className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85 sm:w-auto"
            >
              {sent ? (
                <>
                  Sent <Check size={16} />
                </>
              ) : (
                <>
                  Send Message <ArrowUpRight size={16} />
                </>
              )}
            </button>
          </Magnetic>
        </form>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 font-mono text-sm text-[var(--color-muted)]">
          <a href={`mailto:${profile.email}`} data-cursor-hover className="hover:text-[var(--color-text)]">
            {profile.email}
          </a>
          <a href={profile.socials.linkedin} data-cursor-hover className="hover:text-[var(--color-text)]">
            LinkedIn
          </a>
          <a href={profile.socials.github} data-cursor-hover className="hover:text-[var(--color-text)]">
            GitHub
          </a>
          <a href={profile.socials.figma} data-cursor-hover className="hover:text-[var(--color-text)]">
            Figma
          </a>
        </div>
      </div>
    </section>
  );
}
