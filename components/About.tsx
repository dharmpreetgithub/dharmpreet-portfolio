export default function About() {
  return (
    <section id="about" className="container-shell py-24 md:py-36">
      {/* Section label */}
      <div className="mb-14 flex items-center gap-3">
        <span className="h-px w-8 bg-accent" />

        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
          Engineer Profile
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
        {/* Main statement */}
        <div>
          <h2 className="max-w-3xl font-display text-display-md font-semibold leading-[1.05] text-body">
            I like understanding
            <br />
            <span className="text-muted">
              how intelligent systems work.
            </span>
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-muted">
            <p>
              I’m a Computer Engineering student at Thapar Institute
              of Engineering & Technology, interested in building
              systems that combine intelligent models with practical
              software engineering.
            </p>

            <p>
              My work sits across machine learning, generative AI,
              deep learning, backend development and data systems —
              from retrieval pipelines and language models to
              signal-processing based systems.
            </p>

            <p>
              I enjoy taking a problem from its underlying idea to a
              working system: understanding the data, designing the
              architecture, evaluating the result and thinking about
              what could make the system more reliable.
            </p>
          </div>
        </div>

        {/* Profile panel */}
        <div className="lg:pt-4">
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Current Focus
              </span>

              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,212,232,0.8)]" />
                Building
              </span>
            </div>

            <div className="space-y-0">
              <ProfileItem
                number="01"
                title="Intelligent Systems"
                text="RAG, agentic workflows & grounded generation"
              />

              <ProfileItem
                number="02"
                title="Machine Learning"
                text="Deep learning, classification & model evaluation"
              />

              <ProfileItem
                number="03"
                title="Software Engineering"
                text="Backend APIs, databases & system design"
              />

              <ProfileItem
                number="04"
                title="Applied AI"
                text="Turning research ideas into usable systems"
              />
            </div>
          </div>

          {/* Small identity line */}
          <div className="mt-5 grid grid-cols-2 gap-4">
            <InfoCard label="Education" value="Computer Engineering" />
            <InfoCard label="Based in" value="India" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group border-t border-line py-5 first:border-t-0">
      <div className="flex gap-4">
        <span className="pt-1 font-mono text-[9px] text-accent/60">
          {number}
        </span>

        <div>
          <h3 className="text-sm font-medium text-body transition-colors group-hover:text-accent">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-muted">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted/60">
        {label}
      </div>

      <div className="mt-2 text-xs font-medium text-body">
        {value}
      </div>
    </div>
  );
}