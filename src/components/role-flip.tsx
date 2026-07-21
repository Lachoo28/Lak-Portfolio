"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Palette, LayoutGrid, Server, Globe } from "lucide-react";
import { roles } from "@/lib/data";

const ICONS = {
  code: Code2,
  palette: Palette,
  layout: LayoutGrid,
  server: Server,
  globe: Globe,
};

export function RoleFlip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const role = roles[index];
  const Icon = ICONS[role.icon];

  return (
    <div
      className="relative inline-flex h-14 items-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 pl-2 pr-6 backdrop-blur-sm"
      style={{ perspective: 800 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformStyle: "preserve-3d", transformOrigin: "center" }}
          className="flex items-center gap-3"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{
              backgroundColor: `${role.color}1A`,
              color: role.color,
            }}
          >
            <Icon size={17} />
          </span>
          <span className="font-mono text-sm text-[var(--color-text)] sm:text-[15px]">
            {role.label}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-2 right-6 h-px overflow-hidden rounded-full bg-[var(--color-border)]">
        <motion.div
          key={`bar-${index}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.4, ease: "linear" }}
          style={{ transformOrigin: "left", backgroundColor: role.color }}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
