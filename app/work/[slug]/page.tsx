import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import PipelineDiagram from "@/components/PipelineDiagram";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Dharmpreet`,
    description: project.tagline,
  };
}

const sections = (project: NonNullable<ReturnType<typeof getProject>>) => [
  { number: "01", title: "Problem", body: project.problem },
  { number: "02", title: "Approach", body: project.approach },
  { number: "03", title: "Architecture", body: project.architectureNote, diagram: project.architecture },
  { number: "04", title: "Implementation", body: project.implementation },
  { number: "05", title: "Results", body: project.results },
  { number: "06", title: "What I learned", body: project.learnings },
];

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-20">
      <header className="container-shell py-20 md:py-28">
        <Link
          href="/#work"
          className="mb-10 inline-block text-sm text-muted transition-colors hover:text-body"
        >
          Back to work
        </Link>
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">{project.number}</span>
          <span className="font-mono text-sm text-muted">{project.date}</span>
        </div>
        <h1 className="mb-6 font-display text-display-lg font-semibold text-body">
          {project.name}
        </h1>
        <p className="max-w-2xl text-balance text-xl text-muted">
          {project.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className="container-shell max-w-prose space-y-16 pb-28 md:pb-40">
        {sections(project).map((section) => (
          <section key={section.number}>
            <div className="mb-4 flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">{section.number}</span>
              <h2 className="font-display text-2xl font-semibold text-body">
                {section.title}
              </h2>
            </div>
            {section.body && <p className="text-muted">{section.body}</p>}
            {section.diagram && (
              <div className="mt-6 max-w-none">
                <PipelineDiagram steps={section.diagram} />
              </div>
            )}
          </section>
        ))}
      </div>

      <footer className="border-t border-line">
        <Link
          href={`/work/${next.slug}`}
          className="group container-shell flex items-center justify-between py-14 md:py-20"
        >
          <div>
            <p className="mb-2 text-sm text-muted">Next project</p>
            <h3 className="font-display text-display-md font-semibold text-body transition-colors group-hover:text-accent">
              {next.name}
            </h3>
          </div>
        </Link>
      </footer>
    </article>
  );
}
