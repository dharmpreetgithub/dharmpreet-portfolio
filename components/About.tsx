export default function About() {
  return (
    <section id="about" className="border-y border-line">
      <div className="container-shell py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-10 bg-accent" />
              About
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
              Engineering mindset
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-body md:text-5xl">
              I like understanding what happens between an idea and a working
              system.
            </h2>

            <div className="mt-8 grid gap-6 text-base leading-7 text-muted md:grid-cols-2">
              <p>
                As a Computer Engineering student at Thapar Institute of
                Engineering & Technology, I work across machine learning,
                generative AI, backend development, and software engineering.
              </p>

              <p>
                My projects have taken me from physiological signal processing
                and deep learning to agentic retrieval systems and structured
                software applications.
              </p>

              <p>
                I enjoy breaking complex problems into smaller systems,
                understanding the trade-offs, and building solutions that are
                measurable rather than simply impressive on paper.
              </p>

              <p>
                I am particularly interested in opportunities where AI and
                software engineering meet — building intelligent products with
                strong engineering foundations.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              <div className="bg-surface p-6">
                <p className="font-mono text-xs text-accent">01</p>
                <p className="mt-5 font-medium text-body">
                  Build
                </p>
                <p className="mt-2 text-sm text-muted">
                  Turn ideas into working systems.
                </p>
              </div>

              <div className="bg-surface p-6">
                <p className="font-mono text-xs text-accent">02</p>
                <p className="mt-5 font-medium text-body">
                  Measure
                </p>
                <p className="mt-2 text-sm text-muted">
                  Evaluate what actually works.
                </p>
              </div>

              <div className="bg-surface p-6">
                <p className="font-mono text-xs text-accent">03</p>
                <p className="mt-5 font-medium text-body">
                  Improve
                </p>
                <p className="mt-2 text-sm text-muted">
                  Iterate from evidence and constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}