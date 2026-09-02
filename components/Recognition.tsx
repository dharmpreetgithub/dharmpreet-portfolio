const achievements = [
  {
    number: "01",
    title: "Flipkart GRiD 8.0",
    subtitle: "Semi-Finalist · Round 3 · 2026",
    type: "Competition",
  },
  {
    number: "02",
    title: "District-Level PCM Achievement",
    subtitle: "2021",
    type: "Academic",
  },
  {
    number: "03",
    title: "School Merit Holder",
    subtitle: "2019",
    type: "Academic",
  },
];

const certifications = [
  {
    number: "01",
    title: "Fundamentals of Deep Learning",
    subtitle: "NVIDIA · Coursera · 2026",
  },
  {
    number: "02",
    title:
      "Generative AI Foundations, Models and Platforms",
    subtitle: "Coursera · 2026",
  },
];

function TimelineItem({
  number,
  title,
  subtitle,
  type,
}: {
  number: string;
  title: string;
  subtitle: string;
  type?: string;
}) {
  return (
    <div className="group relative grid grid-cols-[28px_1fr] gap-6 border-b border-line py-7 md:grid-cols-[40px_1fr_auto] md:gap-8 md:py-8">
      {/* timeline dot */}

      <div className="relative z-10 flex justify-center">
        <span
          className="
            mt-1.5 h-2.5 w-2.5
            rounded-full border
            border-accent/40
            bg-ink
            transition-all duration-300
            group-hover:border-accent
            group-hover:bg-accent
            group-hover:shadow-[0_0_12px_rgba(0,212,232,0.8)]
          "
        />
      </div>

      {/* content */}

      <div>
        <div className="mb-2 flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.2em] text-accent/60">
            {number}
          </span>

          {type && (
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted/50">
              {type}
            </span>
          )}
        </div>

        <h3 className="font-display text-lg font-medium text-body transition-colors duration-300 group-hover:text-accent md:text-xl">
          {title}
        </h3>

        <p className="mt-1 text-sm text-muted">
          {subtitle}
        </p>
      </div>

      {/* arrow */}

      <div className="hidden items-center md:flex">
        <span className="text-lg text-muted/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
          ↗
        </span>
      </div>
    </div>
  );
}

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="container-shell py-24 md:py-36"
    >
      {/* =========================================
          ACHIEVEMENTS
      ========================================= */}

      <div className="mb-20 md:mb-28">
        <div className="mb-12 md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Achievements
            </span>
          </div>

          <h2 className="max-w-2xl font-display text-display-md font-semibold leading-tight text-body">
            Milestones along
            <br />
            <span className="text-muted">
              the way.
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-line md:left-[7px]" />

          <div>
            {achievements.map((item) => (
              <TimelineItem
                key={item.number}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          CERTIFICATIONS
      ========================================= */}

      <div>
        <div className="mb-12 md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Certifications
            </span>
          </div>

          <h2 className="max-w-2xl font-display text-display-md font-semibold leading-tight text-body">
            Learning that
            <br />
            <span className="text-muted">
              compounds.
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-line md:left-[7px]" />

          <div>
            {certifications.map((item) => (
              <TimelineItem
                key={item.number}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}