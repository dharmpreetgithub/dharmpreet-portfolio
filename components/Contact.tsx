import { SITE } from "@/lib/links";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-3xl" />

      <div className="container-shell relative py-32 md:py-44">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Contact
          </div>

          <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-body md:text-7xl">
            Let's build something
            <span className="text-muted"> intelligent.</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
            Open to opportunities across AI/ML, Generative AI, backend, and
            software engineering.
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="mt-10 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
          >
            Start a conversation →
          </a>
        </div>

        <div className="mt-20 grid border-y border-line md:grid-cols-4">
          <a
            href={SITE.email}
            className="border-b border-line p-6 text-sm text-muted transition-colors hover:text-accent md:border-b-0 md:border-r"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest">
              Email
            </span>
            <span className="mt-3 block break-all text-body">
              {SITE.email}
            </span>
          </a>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border-b border-line p-6 text-sm text-muted transition-colors hover:text-accent md:border-b-0 md:border-r"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest">
              LinkedIn
            </span>
            <span className="mt-3 block text-body">
              Connect ↗
            </span>
          </a>

          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="border-b border-line p-6 text-sm text-muted transition-colors hover:text-accent md:border-b-0 md:border-r"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest">
              GitHub
            </span>
            <span className="mt-3 block text-body">
              View repositories ↗
            </span>
          </a>

          <a
            href={SITE.resume}
            target="_blank"
            rel="noreferrer"
            className="p-6 text-sm text-muted transition-colors hover:text-accent"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest">
              Resume
            </span>
            <span className="mt-3 block text-body">
              Open resume ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}