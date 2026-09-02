import { SITE } from "@/lib/links";

export default function Contact() {
  return (
    <section id="contact" className="container-shell py-28 md:py-40">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-mono text-sm text-accent">{SITE.name}</p>
        <h2 className="mb-3 text-balance font-display text-display-md font-semibold text-body">
          {SITE.role}
        </h2>
        <p className="mb-10 text-muted">{SITE.tagline}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full bg-body px-8 py-4 font-medium text-ink transition-colors duration-300 hover:bg-accent"
          >
            Email
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-8 py-4 font-medium text-body transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-8 py-4 font-medium text-body transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-8 py-4 font-medium text-body transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
