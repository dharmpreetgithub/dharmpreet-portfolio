import Link from "next/link";
import HeroUniverse from "@/components/HeroUniverse";
import { SITE } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,212,232,0.08),transparent_30%)]" />

      <div className="container-shell relative grid min-h-[calc(100vh-72px)] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Computer Engineer
          </div>

          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-body sm:text-6xl lg:text-7xl">
            Building intelligent systems{" "}
            <span className="text-muted">&</span>{" "}
            scalable software.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-muted md:text-lg">
            I build AI-powered systems, machine-learning solutions, backend
            services, and software products that turn complex problems into
            usable technology.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "AI / ML",
              "Generative AI",
              "Deep Learning",
              "Backend",
              "Software Engineering",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-surface/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-muted"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Explore my work →
            </Link>

            <a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-body transition-all duration-300 hover:border-accent hover:text-accent"
            >
              View resume ↗
            </a>
          </div>

          <div className="mt-12 flex gap-8 border-t border-line pt-5">
            <div>
              <p className="font-display text-xl text-body">04</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                systems built
              </p>
            </div>

            <div>
              <p className="font-display text-xl text-body">AI + SDE</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                focus
              </p>
            </div>

            <div>
              <p className="font-display text-xl text-body">TIET</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                engineering
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <HeroUniverse />
        </div>
      </div>
    </section>
  );
}