"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Code2 } from "lucide-react";
import { stats } from "@/lib/data";

export function HeroAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  const projectsStat = stats.find((s) => s.label === "Projects Completed");

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[480px] lg:mx-0 lg:h-[560px] lg:max-w-none"
      style={{ perspective: 1200 }}
    >
      {/* Ambient glow behind the figure */}
      <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-gradient-to-br from-[var(--color-accent)]/25 to-[var(--color-secondary)]/25 blur-[70px] sm:h-[340px] sm:w-[340px]" />

      {/* Soft ground shadow to seat the figure */}
      <div className="pointer-events-none absolute bottom-[8%] h-8 w-52 rounded-full bg-black/20 blur-xl sm:w-64" />

      {/* Dashed orbit ring, purely decorative */}
      <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-dashed border-[var(--color-border)] sm:h-[380px] sm:w-[380px]" />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 h-full w-full"
      >
        <Image
          src="/avatar.png"
          alt={`${"Lakshan"} — illustrated portrait`}
          fill
          priority
          sizes="(min-width: 1024px) 480px, 360px"
          className="select-none object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
        />
      </motion.div>

      {/* Floating context badge: role */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1 },
          y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        data-cursor-hover
        className="absolute left-0 top-[12%] z-20 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-2 text-xs shadow-lg backdrop-blur-sm sm:left-[2%]"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
          <Code2 size={13} />
        </span>
        <span className="font-mono text-[var(--color-text)]">Clean code</span>
      </motion.div>

      {/* Floating context badge: stat */}
      {projectsStat && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1.3 },
            y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.3 },
          }}
          data-cursor-hover
          className="absolute bottom-[14%] right-0 z-20 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-2 text-xs shadow-lg backdrop-blur-sm sm:right-[2%]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
            <Sparkles size={13} />
          </span>
          <span className="font-mono text-[var(--color-text)]">
            {projectsStat.value}
            {projectsStat.suffix} projects completed
          </span>
        </motion.div>
      )}
    </div>
  );
}
