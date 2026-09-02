import Link from "next/link";
import { projects } from "@/lib/projects";

function ArchitectureFlow({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const steps =
    project.slug === "rag-knowledge-assistant"
      ? ["Query", "Route", "Retrieve", "Rerank", "Validate", "Generate"]
      : project.slug === "multimodal-eeg-emg-robotic-arm-controller"
        ? ["EEG Intent", "EMG Gesture", "Classification", "Command"]
        : project.slug === "dysarthric-speech-severity-detection"
          ? ["Audio", "Mel-Spec", "CNN", "BiLSTM", "Severity"]
          : ["SRS", "UML / DFD", "Core Modules", "Testing"];

  return (
    <div className="mt-8 overflow-x-auto pb-2">
      <div className="flex min-w-max items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="border border-line bg-raised px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-muted">
              {step}
            </span>

            {index !== steps.length - 1 && (
              <span className="text-accent/60">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkGrid() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="container-shell py-28 md:py-36">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Selected systems
          </div>

          <h2 className="font-display text-4xl font-semibold tracking-tight text-body md:text-6xl">
            Built to solve real problems.
          </h2>
        </div>

        <p className="max-w-md text-muted">
          A collection of AI, machine-learning, backend, and software
          engineering systems — explored through architecture, implementation,
          and results.
        </p>
      </div>

      <Link
        href={`/work/${featured.slug}`}
        className="group block overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-14">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-accent">
                {featured.number}
              </span>

              <span className="rounded-full border border-accent/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-accent">
                Featured system
              </span>
            </div>

            <h3 className="mt-12 max-w-2xl font-display text-3xl font-semibold text-body md:text-5xl">
              {featured.name}
            </h3>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              {featured.tagline}
            </p>

            <ArchitectureFlow project={featured} />

            <div className="mt-8 flex flex-wrap gap-2">
              {featured.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-body group-hover:text-accent">
              Explore architecture
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden border-t border-line bg-raised/50 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30" />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/40 bg-surface font-mono text-[10px] uppercase tracking-wider text-accent shadow-[0_0_60px_-20px_rgba(0,212,232,.7)]">
                RAG
              </div>
            </div>

            {["QUERY", "RETRIEVAL", "EVIDENCE", "LLM"].map(
              (item, index) => (
                <div
                  key={item}
                  className="absolute border border-line bg-surface/90 px-3 py-2 font-mono text-[9px] text-muted backdrop-blur"
                  style={{
                    left:
                      index === 0
                        ? "14%"
                        : index === 1
                          ? "70%"
                          : index === 2
                            ? "18%"
                            : "67%",
                    top:
                      index === 0
                        ? "20%"
                        : index === 1
                          ? "28%"
                          : index === 2
                            ? "68%"
                            : "72%",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </Link>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {rest.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group rounded-3xl border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-accent">
                {project.number}
              </span>

              <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                {project.category === "ai"
                  ? "AI / ML"
                  : "Software"}
              </span>
            </div>

            <h3 className="mt-12 font-display text-2xl font-semibold text-body transition-colors group-hover:text-accent">
              {project.name}
            </h3>

            <p className="mt-4 text-sm leading-6 text-muted">
              {project.tagline}
            </p>

            <ArchitectureFlow project={project} />

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 text-sm text-muted transition-colors group-hover:text-accent">
              View case study →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}