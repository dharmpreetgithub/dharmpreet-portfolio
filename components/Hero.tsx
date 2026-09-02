"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroUniverse from "@/components/HeroUniverse";
import { SITE } from "@/lib/links";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".hero-reveal", { opacity: 1, y: 0 });
        return;
      }
      gsap.to(".hero-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.15,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="container-shell grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <p className="hero-reveal mb-6 -translate-y-2 font-mono text-sm text-accent opacity-0">
            {SITE.affiliation}
          </p>
          <h1 className="hero-reveal max-w-xl -translate-y-2 text-balance font-display text-display-lg font-semibold text-body opacity-0">
            {SITE.name}
          </h1>
          <p className="hero-reveal mt-5 max-w-lg -translate-y-2 text-balance font-display text-2xl font-medium text-body opacity-0 md:text-3xl">
            {SITE.headline}
          </p>
          <p className="hero-reveal mt-6 max-w-md -translate-y-2 font-mono text-sm text-muted opacity-0">
            {SITE.tagline}
          </p>
          <div className="hero-reveal mt-10 flex -translate-y-2 flex-wrap items-center gap-4 opacity-0">
            <a
              href="#work"
              className="rounded-full bg-body px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent"
            >
              View work
            </a>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-body hover:decoration-accent"
            >
              Resume ↗
            </a>
          </div>
        </div>

        <div className="hero-reveal opacity-0">
          <HeroUniverse />
        </div>
      </div>
    </section>
  );
}
