const experiences = [
  {
    number: "01",
    role: "Leadership / Outreach / Mentorship",
    organization: "SSA Virsa + Pratigya Abhiyan",
    period: "Sept 2023 — May 2024",
    impact: "500+",
    impactLabel: "participants",
    description:
      "Coordinated cultural showcases and contributed to outreach and mentorship activities at TIET Patiala.",
  },
  {
    number: "02",
    role: "STEM & Language Volunteer",
    organization: "Pratigya Abhiyan",
    period: "2023 — 2024",
    impact: "30+",
    impactLabel: "students",
    description:
      "Supported STEM and language learning activities for underprivileged students.",
  },
  {
    number: "03",
    role: "Individual Mentor",
    organization: "Pratigya Abhiyan",
    period: "2023 — 2024",
    impact: "5",
    impactLabel: "mentees",
    description:
      "Provided individual mentorship and learning support to students.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="container-shell py-24 md:py-36"
    >
      {/* Header */}
      <div className="mb-14 flex flex-col gap-5 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Beyond Engineering
            </span>
          </div>

          <h2 className="font-display text-display-md font-semibold leading-tight text-body">
            Building with
            <br />
            <span className="text-muted">people, too.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-muted md:text-base">
          Experiences that shaped how I communicate, collaborate,
          mentor and contribute outside technical work.
        </p>
      </div>

      {/* Experience cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {experiences.map((experience) => (
          <article
            key={experience.number}
            className="
              group relative overflow-hidden
              rounded-2xl border border-line
              bg-surface
              p-6 md:p-7
              transition-all duration-500
              hover:-translate-y-1
              hover:border-accent/30
              hover:shadow-[0_20px_60px_-30px_rgba(0,212,232,0.3)]
            "
          >
            {/* Background number */}
            <span
              className="
                pointer-events-none absolute
                -right-2 -top-5
                font-mono text-7xl
                font-bold
                text-body/[0.025]
                transition-colors duration-500
                group-hover:text-accent/[0.06]
              "
            >
              {experience.number}
            </span>

            <div className="relative">
              {/* Number */}
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  {experience.number}
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/50">
                  {experience.period}
                </span>
              </div>

              {/* Role */}
              <h3 className="max-w-xs font-display text-xl font-semibold leading-tight text-body transition-colors duration-300 group-hover:text-accent">
                {experience.role}
              </h3>

              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {experience.organization}
              </p>

              {/* Description */}
              <p className="mt-6 min-h-[72px] text-sm leading-6 text-muted">
                {experience.description}
              </p>

              {/* Impact */}
              <div className="mt-8 border-t border-line pt-5">
                <div className="font-display text-3xl font-semibold text-body">
                  {experience.impact}
                </div>

                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  {experience.impactLabel}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}