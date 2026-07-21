"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Figma, ChevronDown, ChevronUp, Eye, X } from "lucide-react";
import { projects, categories, type Category, type Project } from "@/lib/data";

type PrimaryAction = {
  kind: "live" | "figma";
  label: string;
  url: string;
};

function getPrimaryAction(project: Project): PrimaryAction | null {
  const isDesignOnly =
    project.category.length === 1 && project.category[0] === "UI Design";

  if (isDesignOnly && project.figmaUrl) {
    return { kind: "figma", label: "View in Figma", url: project.figmaUrl };
  }
  if (project.liveUrl) {
    return { kind: "live", label: "Live Preview", url: project.liveUrl };
  }
  if (project.figmaUrl) {
    return { kind: "figma", label: "View in Figma", url: project.figmaUrl };
  }
  return null;
}

function ProjectLinks({
  project,
  onViewImage,
}: {
  project: Project;
  onViewImage?: (imageUrl: string, title: string) => void;
}) {
  const primary = getPrimaryAction(project);

  const secondary: { label: string; url: string; icon: typeof Github }[] = [];
  if (project.githubUrl && project.githubUrl !== "#") {
    secondary.push({ label: "View code", url: project.githubUrl, icon: Github });
  }
  if (project.figmaUrl && project.figmaUrl !== "#" && primary?.kind !== "figma") {
    secondary.push({ label: "View in Figma", url: project.figmaUrl, icon: Figma });
  }

  const showViewButton = !!project.imageUrl;

  if (!primary && secondary.length === 0 && !showViewButton) return null;

  return (
    <div className="relative mt-8 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
      {showViewButton && onViewImage && (
        <button
          onClick={() => onViewImage(project.imageUrl!, project.title)}
          data-cursor-hover
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
        >
          View Image
          <Eye size={13} />
        </button>
      )}
      {primary && (
        <a
          href={primary.url}
          data-cursor-hover
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
        >
          {primary.label}
          <ArrowUpRight size={13} />
        </a>
      )}
      {secondary.map((link) => (
        <a
          key={link.label}
          href={link.url}
          data-cursor-hover
          aria-label={link.label}
          title={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <link.icon size={15} />
        </a>
      ))}
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);
  const [activeImage, setActiveImage] = useState<{ url: string; title: string } | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs text-[var(--color-accent)]"> Selected Work</span>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                data-cursor-hover
                onClick={() => {
                  setActive(cat);
                  setShowAll(false);
                }}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  active === cat
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-text)]"
                    : "border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                data-cursor-hover
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]/40"
              >
                <div
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs text-[var(--color-muted)]">
                    {project.year} — {project.role}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-[var(--color-muted)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-accent)]"
                  />
                </div>

                <h3 className="relative mt-6 font-display text-2xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[11px] text-[var(--color-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ProjectLinks
                  project={project}
                  onViewImage={(url, title) => setActiveImage({ url, title })}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 font-mono text-xs font-medium text-[var(--color-muted)] transition-all hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text)] hover:shadow-lg hover:shadow-[var(--color-accent)]/5 hover:-translate-y-0.5"
            >
              <span>{showAll ? "See Less" : "See More"}</span>
              {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setActiveImage(null)}
              data-cursor-hover
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 border border-white/10"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-2xl flex flex-col"
            >
              <div className="relative flex-1 overflow-hidden rounded-lg">
                <img
                  src={activeImage.url}
                  alt={activeImage.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>
              <div className="mt-3 text-center">
                <h4 className="font-display text-base font-medium text-[var(--color-text)]">
                  {activeImage.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
