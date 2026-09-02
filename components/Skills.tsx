"use client";

import { useState } from "react";

const CAPABILITIES = [
  {
    id: "ai",
    label: "AI / ML",
    description:
      "Machine-learning systems from preprocessing and feature engineering through model evaluation.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Model Evaluation",
      "Scikit-learn",
      "PyTorch",
    ],
  },
  {
    id: "genai",
    label: "Generative AI",
    description:
      "Retrieval-augmented and agentic systems designed around grounded responses and reliable retrieval.",
    skills: [
      "Agentic RAG",
      "LLMs",
      "LangGraph",
      "Gemini API",
      "Hybrid Retrieval",
      "BM25",
      "Reranking",
      "Query Routing",
      "Grounded Generation",
      "Prompt Engineering",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description:
      "API-driven backend systems with structured application logic and database integration.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Backend Development",
      "OOP",
      "SQL",
      "MySQL",
      "Oracle SQL",
      "PL/SQL",
    ],
  },
  {
    id: "software",
    label: "Software Engineering",
    description:
      "Engineering practices covering requirements, architecture, implementation, testing, and maintainability.",
    skills: [
      "C++",
      "Software Engineering",
      "SDLC",
      "UML",
      "Testing",
      "Integration Testing",
      "System Design",
      "Git",
      "GitHub",
    ],
  },
  {
    id: "signal",
    label: "Signal Processing",
    description:
      "Deep-learning workflows for physiological and speech signals.",
    skills: [
      "EEG",
      "EMG",
      "Audio Processing",
      "Mel-Spectrograms",
      "Signal Preprocessing",
      "Feature Extraction",
      "PhysioNet",
      "NinaPro",
    ],
  },
  {
    id: "data",
    label: "Data & Tools",
    description:
      "Data manipulation, experimentation, development, and workflow tooling.",
    skills: [
      "Pandas",
      "NumPy",
      "EDA",
      "Data Preprocessing",
      "ChromaDB",
      "Vector Search",
      "VS Code",
      "Google Colab",
      "R",
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(CAPABILITIES[0]);

  return (
    <section id="skills" className="border-y border-line bg-raised/30">
      <div className="container-shell py-28 md:py-36">
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Capability map
          </div>

          <h2 className="font-display text-4xl font-semibold tracking-tight text-body md:text-6xl">
            The stack behind the systems.
          </h2>

          <p className="mt-6 max-w-2xl text-muted md:text-lg">
            My work sits at the intersection of artificial intelligence,
            backend engineering, and software development.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-line lg:border-b-0 lg:border-r">
            {CAPABILITIES.map((capability, index) => (
              <button
                key={capability.id}
                onClick={() => setActive(capability)}
                className={`flex w-full items-center justify-between border-b border-line px-6 py-5 text-left transition-all last:border-b-0 md:px-8 ${
                  active.id === capability.id
                    ? "bg-accent/[0.06] text-accent"
                    : "text-muted hover:bg-raised hover:text-body"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[10px] opacity-50">
                    0{index + 1}
                  </span>
                  <span className="font-medium">{capability.label}</span>
                </span>

                <span
                  className={`transition-transform ${
                    active.id === capability.id ? "translate-x-1" : ""
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          <div className="min-h-[360px] p-7 md:p-10 lg:p-14">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Active capability
                </p>

                <h3 className="mt-4 font-display text-3xl font-semibold text-body md:text-4xl">
                  {active.label}
                </h3>
              </div>

              <span className="font-mono text-xs text-muted">/SYSTEM</span>
            </div>

            <p className="mt-5 max-w-xl leading-7 text-muted">
              {active.description}
            </p>

            <div className="mt-9 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {active.skills.map((skill) => (
                <div
                  key={skill}
                  className="border border-line px-4 py-3 font-mono text-xs text-muted transition-all hover:border-accent/50 hover:text-accent"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}