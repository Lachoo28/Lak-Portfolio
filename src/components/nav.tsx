"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Magnetic } from "./magnetic";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const scrollToSection = window.scrollToSection;
      if (scrollToSection) {
        scrollToSection(href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isOpen
          ? "border-b border-transparent bg-transparent"
          : scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#home"
          onClick={(e) => {
            setIsOpen(false);
            handleScroll(e, "#home");
          }}
          className="font-display text-lg font-semibold tracking-tight"
          data-cursor-hover
        >
          Lakshan<span className="text-[var(--color-accent)]">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                data-cursor-hover
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            data-cursor-hover
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            data-cursor-hover
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)] md:hidden z-50 relative"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="hidden rounded-full bg-[var(--color-text)] px-5 py-2 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85 sm:inline-block"
            >
              Hire Me
            </a>
          </Magnetic>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-45 w-full h-screen bg-[var(--color-bg)]/98 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col justify-center items-center ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-center">
          {LINKS.map((link, idx) => (
            <li
              key={link.href}
              style={{
                transitionDelay: isOpen ? `${idx * 50}ms` : "0ms",
              }}
              className={`transition-all duration-300 transform ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleScroll(e, link.href);
                }}
                data-cursor-hover
                className="font-display text-2xl font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li
            style={{
              transitionDelay: isOpen ? `${LINKS.length * 50}ms` : "0ms",
            }}
            className={`transition-all duration-300 transform mt-4 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setIsOpen(false)}
              data-cursor-hover
              className="rounded-full bg-[var(--color-text)] px-8 py-3 text-base font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85 inline-block"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
