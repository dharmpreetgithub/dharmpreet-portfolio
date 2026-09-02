import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function WorkGrid() {
  const featured = projects[0];
  const remaining = projects.slice(1);

  return (
    <section id="work" className="container-shell py-24 md:py-36">
      {/* Section heading */}
      <div className="mb-14 md:mb-20">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Selected Systems
          </span>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-display-md font-semibold leading-tight text-body">
            Systems I’ve built,
            <br />
            <span className="text-muted">problems I’ve explored.</span>
          </h2>

          <p className="max-w-md text-sm leading-6 text-muted md:text-base">
            From agentic retrieval and deep learning to backend and
            software engineering, these projects reflect how I approach
            real technical problems.
          </p>
        </div>
      </div>

      {/* Featured project */}
      <div className="mb-6">
        <Link
          href={`/work/${featured.slug}`}
          className="
            group relative block overflow-hidden
            rounded-2xl border border-line
            bg-surface
            transition-all duration-500
            hover:border-accent/40
            hover:shadow-[0_25px_90px_-35px_rgba(0,212,232,0.4)]
          "
        >
          <div className="grid min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div className="relative flex flex-col justify-between p-7 md:p-10 lg:p-12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-accent">
                    {featured.number}
                  </span>

                  <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-accent">
                    Featured System
                  </span>
                </div>

                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Agentic AI · Retrieval · Backend
                </p>

                <h3 className="max-w-xl font-display text-3xl font-semibold leading-tight text-body transition-colors duration-300 group-hover:text-accent md:text-4xl lg:text-5xl">
                  {featured.name}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-muted md:text-base">
                  {featured.tagline}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featured.tech.slice(0, 7).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,212,232,0.8)]" />
                End-to-end intelligent system
              </div>
            </div>

            {/* Right architecture panel */}
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-t border-line bg-ink/50 lg:border-l lg:border-t-0">
              {/* Grid */}
              <div
                className="
                  absolute inset-0 opacity-40
                  [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
              />

              {/* glow */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

              {/* Architecture */}
              <div className="relative w-[82%] max-w-md">
                <div className="mb-4 text-center font-mono text-[9px] uppercase tracking-[0.25em] text-muted/60">
                  Retrieval Architecture
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <ArchitectureNode label="Documents" />
                    <Connector />
                    <ArchitectureNode label="Ingestion" />
                  </div>

                  <div className="flex justify-center">
                    <VerticalConnector />
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <ArchitectureNode label="Query" accent />
                    <Connector />
                    <ArchitectureNode label="Routing" />
                    <Connector />
                    <ArchitectureNode label="Retrieval" />
                  </div>

                  <div className="flex justify-center">
                    <VerticalConnector />
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <ArchitectureNode label="Reranking" />
                    <Connector />
                    <ArchitectureNode label="LLM" accent />
                  </div>

                  <div className="flex justify-center">
                    <VerticalConnector />
                  </div>

                  <div className="flex justify-center">
                    <ArchitectureNode label="Grounded Answer" accent />
                  </div>
                </div>
              </div>

              <span className="absolute bottom-4 right-5 font-mono text-[9px] tracking-[0.2em] text-muted/40">
                RAG / 01
              </span>
            </div>
          </div>

          {/* bottom action */}
          <div className="flex items-center justify-between border-t border-line px-7 py-4 md:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              View technical case study
            </span>

            <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </div>
        </Link>
      </div>

      {/* Remaining projects */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {remaining.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ArchitectureNode({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`
        rounded-lg border px-3 py-2
        font-mono text-[9px]
        uppercase tracking-[0.08em]
        whitespace-nowrap
        ${
          accent
            ? "border-accent/30 bg-accent/5 text-accent"
            : "border-line bg-surface text-muted"
        }
      `}
    >
      {label}
    </div>
  );
}

function Connector() {
  return <div className="h-px w-4 bg-accent/20" />;
}

function VerticalConnector() {
  return <div className="h-4 w-px bg-accent/20" />;
}