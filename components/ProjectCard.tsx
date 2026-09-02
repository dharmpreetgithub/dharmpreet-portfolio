import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const isAI = project.category === "ai";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="
        group relative block overflow-hidden
        rounded-2xl border border-line
        bg-surface
        transition-all duration-500
        hover:-translate-y-1
        hover:border-accent/40
        hover:shadow-[0_20px_70px_-30px_rgba(0,212,232,0.35)]
      "
    >
      {/* subtle top glow */}
      <div
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-48 w-48 rounded-full
          bg-accent/5 blur-3xl
          transition-all duration-500
          group-hover:bg-accent/10
        "
      />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-accent">
            {project.number}
          </span>

          <span
            className="
              rounded-full border border-line
              px-3 py-1
              text-[10px] uppercase
              tracking-[0.16em]
              text-muted
            "
          >
            {isAI ? "AI / ML" : "Software"}
          </span>
        </div>

        {/* Architecture visual */}
        <div
          className="
            relative mb-8
            flex h-32 items-center justify-center
            overflow-hidden rounded-xl
            border border-line
            bg-ink/60
          "
        >
          {/* grid */}
          <div
            className="
              absolute inset-0 opacity-30
              [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
              [background-size:24px_24px]
            "
          />

          {/* pipeline */}
          <div className="relative flex items-center gap-2 px-4">
            <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(0,212,232,0.8)]" />

            <div className="h-px w-8 bg-accent/30" />

            <div className="rounded-md border border-accent/20 bg-accent/5 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-accent/80">
              Input
            </div>

            <div className="h-px w-6 bg-accent/30" />

            <div className="rounded-md border border-line bg-surface px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-muted">
              System
            </div>

            <div className="h-px w-6 bg-accent/30" />

            <div className="rounded-md border border-accent/20 bg-accent/5 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-accent/80">
              Output
            </div>

            <div className="h-2 w-2 rounded-full bg-accent/60" />
          </div>

          <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/50">
            system architecture
          </span>
        </div>

        {/* Project info */}
        <div>
          <h3
            className="
              max-w-lg
              font-display text-2xl
              font-semibold leading-tight
              text-body
              transition-colors duration-300
              group-hover:text-accent
              md:text-3xl
            "
          >
            {project.name}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted md:text-base">
            {project.tagline}
          </p>
        </div>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="
                rounded-md
                border border-line
                px-2.5 py-1
                font-mono text-[10px]
                text-muted
                transition-colors
                group-hover:border-line/80
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="
            mt-8 flex items-center
            justify-between border-t
            border-line pt-5
          "
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Case Study
          </span>

          <span
            className="
              flex items-center gap-2
              text-sm font-medium text-body
              transition-all duration-300
              group-hover:gap-3
              group-hover:text-accent
            "
          >
            Explore
            <span className="text-accent">↗</span>
          </span>
        </div>
      </div>
    </Link>
  );
}