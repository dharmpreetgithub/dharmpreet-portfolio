import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex flex-col justify-between gap-8 bg-surface p-8 transition-colors duration-300 hover:bg-raised md:p-10"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-sm text-accent">{project.number}</span>
        <span
          className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-wide ${
            project.category === "ai"
              ? "border-accent/30 text-accent"
              : "border-line text-muted"
          }`}
        >
          {project.category === "ai" ? "AI / ML" : "Software Engineering"}
        </span>
      </div>

      <div>
        <h3 className="mb-3 font-display text-2xl font-semibold text-body transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mb-6 text-muted">{project.tagline}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-body transition-all duration-300 ease-signature group-hover:gap-3 group-hover:text-accent">
          View case study
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
