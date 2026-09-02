"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Portrait from "@/components/Portrait";

const SKILLS = [
  { label: "AI / ML", short: "01" },
  { label: "Generative AI", short: "02" },
  { label: "Deep Learning", short: "03" },
  { label: "Backend", short: "04" },
  { label: "Software Engineering", short: "05" },
];

type Point = {
  x: number;
  y: number;
};

export default function HeroUniverse() {
  const universeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [cursor, setCursor] = useState<Point>({ x: 0, y: 0 });

  const particles = useMemo(() => {
    return Array.from({ length: 70 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.45 + 0.15,
      drift: Math.random() * 20 + 10,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = universeRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        const px =
          ((particle.x / 100) * width +
            Math.sin(Date.now() / 4000 + particle.id) * particle.drift) %
          width;

        const py =
          ((particle.y / 100) * height +
            Math.cos(Date.now() / 5000 + particle.id) * particle.drift) %
          height;

        const x = px < 0 ? px + width : px;
        const y = py < 0 ? py + height : py;

        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = "rgba(125, 211, 252, 1)";
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [particles]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const rect = universeRef.current?.getBoundingClientRect();
      if (!rect) return;

      setCursor({
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        ref={universeRef}
        className="relative mx-auto flex min-h-[680px] w-full max-w-[1200px] items-center justify-center px-6 py-24 sm:min-h-[760px] lg:min-h-[820px]"
      >
        {/* Background particles */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />

        {/* Soft atmospheric glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[100px]"
        />

        {/* Interactive universe */}
        <div
          className="relative h-[600px] w-full max-w-[920px] transition-transform duration-500 ease-out sm:h-[680px]"
          style={{
            transform: `perspective(1200px) rotateX(${-cursor.y * 2.5}deg) rotateY(${cursor.x * 3.5}deg)`,
          }}
        >
          {/* Orbit 1 */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[330px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/[0.10]"
            style={{
              transform: `translate(-50%, -50%) rotate(-12deg)`,
            }}
          />

          {/* Orbit 2 */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[470px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/[0.07]"
            style={{
              transform: `translate(-50%, -50%) rotate(14deg)`,
            }}
          />

          {/* Orbit 3 */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[570px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-300/[0.045]"
            style={{
              transform: `translate(-50%, -50%) rotate(-25deg)`,
            }}
          />

          {/* Central intelligence core */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex flex-col items-center">
              {/* rotating rings */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 animate-[spin_18s_linear_infinite] rounded-full border border-cyan-300/[0.12]"
              />

              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-full border border-dashed border-cyan-300/[0.14]"
              />

              {/* photo */}
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-cyan-200/30 bg-black/80 p-1 shadow-[0_0_70px_rgba(34,211,238,0.12)] sm:h-52 sm:w-52">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Portrait />
                </div>
              </div>

              {/* core label */}
              <div className="mt-7 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-cyan-300/70">
                  Intelligence Core
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  AI / ML
                </h2>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                    system online
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill orbit nodes */}
          <div
            className="absolute inset-0"
            aria-label="Technical domains"
          >
            {/* AI / ML */}
            <SkillNode
              index={0}
              label={SKILLS[0].label}
              short={SKILLS[0].short}
              position="left-top"
              active={activeSkill === 0}
              onEnter={() => setActiveSkill(0)}
              onLeave={() => setActiveSkill(null)}
            />

            {/* Generative AI */}
            <SkillNode
              index={1}
              label={SKILLS[1].label}
              short={SKILLS[1].short}
              position="right-top"
              active={activeSkill === 1}
              onEnter={() => setActiveSkill(1)}
              onLeave={() => setActiveSkill(null)}
            />

            {/* Deep Learning */}
            <SkillNode
              index={2}
              label={SKILLS[2].label}
              short={SKILLS[2].short}
              position="right-middle"
              active={activeSkill === 2}
              onEnter={() => setActiveSkill(2)}
              onLeave={() => setActiveSkill(null)}
            />

            {/* Backend */}
            <SkillNode
              index={3}
              label={SKILLS[3].label}
              short={SKILLS[3].short}
              position="left-middle"
              active={activeSkill === 3}
              onEnter={() => setActiveSkill(3)}
              onLeave={() => setActiveSkill(null)}
            />

            {/* Software Engineering */}
            <SkillNode
              index={4}
              label={SKILLS[4].label}
              short={SKILLS[4].short}
              position="bottom"
              active={activeSkill === 4}
              onEnter={() => setActiveSkill(4)}
              onLeave={() => setActiveSkill(null)}
            />
          </div>

          {/* Active connection */}
          {activeSkill !== null && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-px origin-left bg-gradient-to-r from-cyan-300/60 via-cyan-300/20 to-transparent transition-all duration-300 lg:block"
              style={{
                width:
                  activeSkill === 4
                    ? "250px"
                    : activeSkill === 0 || activeSkill === 3
                      ? "270px"
                      : "280px",
                transform:
                  activeSkill === 0
                    ? "rotate(205deg)"
                    : activeSkill === 1
                      ? "rotate(-25deg)"
                      : activeSkill === 2
                        ? "rotate(15deg)"
                        : activeSkill === 3
                          ? "rotate(155deg)"
                          : "rotate(90deg)",
              }}
            />
          )}
        </div>

        {/* Mobile domain list */}
        <div className="absolute bottom-8 left-1/2 flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 flex-wrap justify-center gap-2 lg:hidden">
          {SKILLS.map((skill) => (
            <span
              key={skill.label}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 backdrop-blur"
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillNode({
  label,
  short,
  position,
  active,
  onEnter,
  onLeave,
}: {
  index: number;
  label: string;
  short: string;
  position:
    | "left-top"
    | "right-top"
    | "left-middle"
    | "right-middle"
    | "bottom";
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const positionClasses = {
    "left-top": "left-[3%] top-[18%]",
    "right-top": "right-[3%] top-[18%]",
    "left-middle": "left-[0%] top-[50%]",
    "right-middle": "right-[0%] top-[50%]",
    bottom: "left-1/2 bottom-[2%] -translate-x-1/2",
  };

  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`absolute z-30 ${positionClasses[position]} group w-[185px] text-left transition-all duration-500 sm:w-[215px] ${
        active ? "scale-[1.06]" : "scale-100"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border px-5 py-4 backdrop-blur-xl transition-all duration-500 ${
          active
            ? "border-cyan-300/45 bg-cyan-300/[0.08] shadow-[0_0_35px_rgba(34,211,238,0.12)]"
            : "border-white/[0.10] bg-black/35 hover:border-cyan-300/25 hover:bg-white/[0.045]"
        }`}
      >
        {/* accent */}
        <div
          className={`absolute left-0 top-0 h-px w-full transition-opacity duration-300 ${
            active ? "bg-cyan-300 opacity-100" : "bg-cyan-300 opacity-30"
          }`}
        />

        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-300/60">
            DOMAIN {short}
          </span>

          <span
            className={`h-2 w-2 rounded-full border transition-all ${
              active
                ? "border-cyan-200 bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]"
                : "border-cyan-300/30 bg-cyan-300/10"
            }`}
          />
        </div>

        <p className="mt-3 text-base font-semibold tracking-tight text-white sm:text-lg">
          {label}
        </p>

        <p
          className={`mt-2 font-mono text-[9px] uppercase tracking-[0.18em] transition-colors ${
            active ? "text-cyan-300/80" : "text-white/25"
          }`}
        >
          {active ? "domain active" : "explore domain"}
        </p>
      </div>
    </button>
  );
}