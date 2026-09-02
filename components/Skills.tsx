"use client";

import { useState } from "react";

const skillGroups = [
  {
    id: "ai",
    label: "01",
    title: "AI / Machine Learning",
    description:
      "Building and evaluating machine learning systems, from preprocessing and feature engineering to deep learning and model evaluation.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "CRNN",
      "BiLSTM",
      "Classification",
      "Regression",
      "Model Evaluation",
      "Feature Engineering",
      "EDA",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    id: "genai",
    label: "02",
    title: "Generative AI",
    description:
      "Designing retrieval-augmented and agentic systems with hybrid search, routing, reranking and grounded generation.",
    skills: [
      "RAG",
      "Agentic AI",
      "LLMs",
      "LangGraph",
      "Gemini API",
      "Hybrid Retrieval",
      "BM25",
      "Reranking",
      "Query Routing",
      "Prompt Engineering",
      "Grounded Generation",
      "Vector Search",
    ],
  },
  {
    id: "backend",
    label: "03",
    title: "Backend & Software",
    description:
      "Developing structured software systems with backend APIs, databases, software engineering practices and testing.",
    skills: [
      "Python",
      "C++",
      "SQL",
      "REST APIs",
      "FastAPI",
      "OOP",
      "DSA",
      "Software Engineering",
      "SDLC",
      "UML",
      "Testing",
      "Git / GitHub",
    ],
  },
  {
    id: "data",
    label: "04",
    title: "Data & Databases",
    description:
      "Working with structured data, relational databases, preprocessing and analytical workflows.",
    skills: [
      "Pandas",
      "NumPy",
      "MySQL",
      "Oracle SQL",
      "PL/SQL",
      "ChromaDB",
      "Data Preprocessing",
      "SQL Queries",
    ],
  },
  {
    id: "signals",
    label: "05",
    title: "Signal Processing",
    description:
      "Applying deep learning and signal-processing techniques to speech, EEG and EMG data.",
    skills: [
      "EEG",
      "EMG",
      "Audio Processing",
      "Mel-Spectrograms",
      "Signal Processing",
      "PhysioNet",
      "NinaPro",
      "TORGO",
    ],
  },
  {
    id: "tools",
    label: "06",
    title: "Tools & Workflow",
    description:
      "Tools used throughout development, experimentation, version control and technical workflows.",
    skills: [
      "VS Code",
      "Google Colab",
      "Git",
      "GitHub",
      "Python",
      "Jupyter",
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState("ai");

  const activeGroup =
    skillGroups.find((group) => group.id === active) ?? skillGroups[0];

  return (
    <section
      id="skills"
      className="container-shell py-24 md:py-36"
    >
      {/* Heading */}
      <div className="mb-14 md:mb-20">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Capability Map
          </span>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-display-md font-semibold leading-tight text-body">
            A stack built around
            <br />
            <span className="text-muted">
              intelligent systems.
            </span>
          </h2>

          <p className="max-w-md text-sm leading-6 text-muted md:text-base">
            A combination of machine learning, generative AI,
            backend engineering, data systems and signal
            processing.
          </p>
        </div>
      </div>

      {/* Main capability map */}
      <div className="grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[0.8fr_1.2fr]">
        {/* Categories */}
        <div className="border-b border-line lg:border-b-0 lg:border-r">
          {skillGroups.map((group) => {
            const isActive = active === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActive(group.id)}
                className={`
                  group flex w-full items-center
                  justify-between border-b border-line
                  px-6 py-5 text-left
                  transition-all duration-300
                  last:border-b-0
                  md:px-8 md:py-6
                  ${
                    isActive
                      ? "bg-accent/5"
                      : "hover:bg-raised"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`
                      font-mono text-[10px]
                      ${
                        isActive
                          ? "text-accent"
                          : "text-muted/50"
                      }
                    `}
                  >
                    {group.label}
                  </span>

                  <span
                    className={`
                      text-sm font-medium
                      md:text-base
                      ${
                        isActive
                          ? "text-body"
                          : "text-muted"
                      }
                    `}
                  >
                    {group.title}
                  </span>
                </div>

                <span
                  className={`
                    text-lg transition-all duration-300
                    ${
                      isActive
                        ? "translate-x-0 text-accent opacity-100"
                        : "-translate-x-2 text-muted opacity-0"
                    }
                  `}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Active capability */}
        <div className="relative min-h-[430px] overflow-hidden p-7 md:p-10 lg:p-12">
          {/* Background grid */}
          <div
            className="
              pointer-events-none absolute inset-0 opacity-30
              [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
              [background-size:32px_32px]
            "
          />

          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Capability / {activeGroup.label}
            </div>

            <h3 className="font-display text-2xl font-semibold text-body md:text-3xl">
              {activeGroup.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              {activeGroup.description}
            </p>

            {/* Skills */}
            <div className="mt-10">
              <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/60">
                Technologies & concepts
              </div>

              <div className="flex flex-wrap gap-2.5">
                {activeGroup.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="
                      group/skill
                      rounded-lg
                      border border-line
                      bg-ink/40
                      px-3 py-2
                      font-mono text-[10px]
                      text-muted
                      transition-all duration-300
                      hover:border-accent/40
                      hover:bg-accent/5
                      hover:text-accent
                    "
                    style={{
                      animationDelay: `${index * 30}ms`,
                    }}
                  >
                    <span className="mr-2 text-accent/40 transition-colors group-hover/skill:text-accent">
                      +
                    </span>

                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* System indicator */}
            <div className="mt-12 flex items-center gap-3 border-t border-line pt-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                Active capability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}