"use client";

import { useEffect, useRef, useState } from "react";
import Portrait from "@/components/Portrait";

type SkillNode = {
  label: string;
  short: string;
  orbit: number;
  startAngle: number;
  speed: number;
  size: "large" | "medium";
};

const SKILLS: SkillNode[] = [
  {
    label: "AI / ML",
    short: "01",
    orbit: 0,
    startAngle: -25,
    speed: 0.018,
    size: "large",
  },
  {
    label: "Generative AI",
    short: "02",
    orbit: 1,
    startAngle: 40,
    speed: -0.014,
    size: "large",
  },
  {
    label: "Deep Learning",
    short: "03",
    orbit: 2,
    startAngle: 145,
    speed: 0.011,
    size: "large",
  },
  {
    label: "Backend",
    short: "04",
    orbit: 1,
    startAngle: 215,
    speed: -0.016,
    size: "medium",
  },
  {
    label: "Software Engineering",
    short: "05",
    orbit: 2,
    startAngle: 300,
    speed: 0.009,
    size: "medium",
  },
];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

export default function HeroUniverse() {
  const universeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [time, setTime] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    active: false,
  });

  /* =========================================
     REDUCED MOTION
  ========================================= */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReducedMotion(media.matches);

    const update = () => {
      setReducedMotion(media.matches);
    };

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  /* =========================================
     MAIN ORBIT CLOCK
  ========================================= */

  useEffect(() => {
    if (reducedMotion) return;

    let frame = 0;

    const animate = () => {
      setTime((value) => value + 1);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  /* =========================================
     CURSOR
  ========================================= */

  useEffect(() => {
    const universe = universeRef.current;

    if (!universe) return;

    const move = (event: PointerEvent) => {
      const rect = universe.getBoundingClientRect();

      setCursor({
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
        active: true,
      });
    };

    const leave = () => {
      setCursor({
        x: 0,
        y: 0,
        active: false,
      });
    };

    universe.addEventListener("pointermove", move);
    universe.addEventListener("pointerleave", leave);

    return () => {
      universe.removeEventListener("pointermove", move);
      universe.removeEventListener("pointerleave", leave);
    };
  }, []);

  /* =========================================
     PARTICLE FIELD
  ========================================= */

  useEffect(() => {
    const universe = universeRef.current;
    const canvas = canvasRef.current;

    if (!universe || !canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;

    const particles: Particle[] = [];

    const resize = () => {
      const rect = universe.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;

      const count = width < 700 ? 30 : 75;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          size: Math.random() * 1.1 + 0.3,
          opacity: Math.random() * 0.25 + 0.04,
        });
      }
    };

    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;
        }

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(0,212,232,${particle.opacity})`;

        ctx.fill();
      }

      if (!reducedMotion) {
        frame = requestAnimationFrame(draw);
      }
    };

    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  const rotateX = cursor.y * -4;
  const rotateY = cursor.x * 6;

  return (
    <div
      ref={universeRef}
      className="relative mx-auto w-full max-w-[860px]"
      style={{
        perspective: "1500px",
      }}
    >
      <div
        className="relative aspect-square w-full"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition:
            "transform 700ms cubic-bezier(.16,1,.3,1)",
        }}
      >
        {/* =========================================
            PARTICLES
        ========================================= */}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        {/* atmospheric glow */}

        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            h-[52%] w-[52%]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-accent/[0.055]
            blur-[100px]
          "
        />

        {/* =========================================
            ORBIT SYSTEM
        ========================================= */}

        <div className="absolute inset-0">
          <div
            className="
              absolute left-1/2 top-1/2
              h-[58%] w-[92%]
              -translate-x-1/2 -translate-y-1/2
              rounded-[50%]
              border border-accent/25
            "
            style={{
              transform:
                "translate(-50%, -50%) rotate(-12deg)",
            }}
          />

          <div
            className="
              absolute left-1/2 top-1/2
              h-[76%] w-[72%]
              -translate-x-1/2 -translate-y-1/2
              rounded-[50%]
              border border-accent/17
            "
            style={{
              transform:
                "translate(-50%, -50%) rotate(26deg)",
            }}
          />

          <div
            className="
              absolute left-1/2 top-1/2
              h-[91%] w-[88%]
              -translate-x-1/2 -translate-y-1/2
              rounded-[50%]
              border border-accent/10
            "
            style={{
              transform:
                "translate(-50%, -50%) rotate(52deg)",
            }}
          />

          <div
            className="
              absolute left-1/2 top-1/2
              h-[104%] w-[72%]
              -translate-x-1/2 -translate-y-1/2
              rounded-[50%]
              border border-accent/[0.06]
            "
            style={{
              transform:
                "translate(-50%, -50%) rotate(-35deg)",
            }}
          />
        </div>

        {/* =========================================
            ACTIVE CONNECTION LINES
        ========================================= */}

        {SKILLS.map((skill) => {
          const orbitRadius =
            skill.orbit === 0
              ? 36
              : skill.orbit === 1
                ? 43
                : 49;

          const verticalScale =
            skill.orbit === 0
              ? 0.58
              : skill.orbit === 1
                ? 0.68
                : 0.76;

          const angle =
            skill.startAngle +
            time * skill.speed;

          const radians =
            (angle * Math.PI) / 180;

          const x =
            50 +
            Math.cos(radians) * orbitRadius;

          const y =
            50 +
            Math.sin(radians) *
              orbitRadius *
              verticalScale;

          const active = hovered === skill.label;

          return (
            <div
              key={`line-${skill.label}`}
              className="pointer-events-none absolute inset-0 hidden md:block"
            >
              <div
                className="
                  absolute left-1/2 top-1/2
                  h-px origin-left
                  transition-opacity duration-300
                "
                style={{
                  width: `${Math.hypot(
                    x - 50,
                    y - 50
                  )}%`,
                  transform: `rotate(${
                    Math.atan2(
                      y - 50,
                      x - 50
                    ) *
                    (180 / Math.PI)
                  }deg)`,
                  opacity: active ? 0.5 : 0,
                  background:
                    "linear-gradient(90deg, rgba(0,212,232,.7), transparent)",
                  boxShadow: active
                    ? "0 0 12px rgba(0,212,232,.7)"
                    : "none",
                }}
              />
            </div>
          );
        })}

        {/* =========================================
            SKILL PLANETS
        ========================================= */}

        <div className="absolute inset-0 hidden md:block">
          {SKILLS.map((skill) => {
            const orbitRadius =
              skill.orbit === 0
                ? 36
                : skill.orbit === 1
                  ? 43
                  : 49;

            const verticalScale =
              skill.orbit === 0
                ? 0.58
                : skill.orbit === 1
                  ? 0.68
                  : 0.76;

            const angle =
              skill.startAngle +
              time * skill.speed;

            const radians =
              (angle * Math.PI) / 180;

            const x =
              50 +
              Math.cos(radians) * orbitRadius;

            const y =
              50 +
              Math.sin(radians) *
                orbitRadius *
                verticalScale;

            const active =
              hovered === skill.label;

            return (
              <div
                key={skill.label}
                className="absolute z-40"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* planet glow */}

                <div
                  className={[
                    "pointer-events-none absolute",
                    "left-1/2 top-1/2",
                    "-translate-x-1/2 -translate-y-1/2",
                    "rounded-full bg-accent/15 blur-2xl",
                    "transition-all duration-500",
                    active
                      ? "h-32 w-64 opacity-100"
                      : "h-24 w-48 opacity-60",
                  ].join(" ")}
                />

                <a
                  href="#skills"
                  onMouseEnter={() =>
                    setHovered(skill.label)
                  }
                  onMouseLeave={() =>
                    setHovered(null)
                  }
                  onFocus={() =>
                    setHovered(skill.label)
                  }
                  onBlur={() =>
                    setHovered(null)
                  }
                  className={[
                    "group relative flex items-center",
                    "gap-4 overflow-hidden",
                    "rounded-2xl border",
                    "bg-[#060b10]/95",
                    "backdrop-blur-2xl",
                    "transition-all duration-300",
                    "focus:outline-none",
                    "focus:ring-2 focus:ring-accent/50",
                    skill.size === "large"
                      ? "min-w-[190px] px-6 py-5"
                      : "min-w-[175px] px-5 py-4",
                    active
                      ? "scale-110 border-accent shadow-[0_0_60px_-12px_rgba(0,212,232,1)]"
                      : "border-accent/30 shadow-[0_18px_55px_-25px_rgba(0,212,232,.8)] hover:border-accent/80",
                  ].join(" ")}
                >
                  {/* top accent line */}

                  <span
                    className={[
                      "absolute left-0 top-0 h-px",
                      "bg-accent transition-all duration-500",
                      active
                        ? "w-full"
                        : "w-1/3",
                    ].join(" ")}
                  />

                  {/* node */}

                  <span
                    className={[
                      "relative shrink-0 rounded-full",
                      "bg-accent",
                      "shadow-[0_0_18px_rgba(0,212,232,1)]",
                      active
                        ? "h-3.5 w-3.5"
                        : "h-2.5 w-2.5",
                    ].join(" ")}
                  />

                  <span className="flex flex-col">
                    <span
                      className={[
                        "font-mono uppercase",
                        "tracking-[0.12em]",
                        "leading-tight",
                        active
                          ? "text-[14px] font-bold text-accent"
                          : "text-[13px] font-semibold text-body",
                      ].join(" ")}
                    >
                      {skill.label}
                    </span>

                    {active && (
                      <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-muted">
                        domain active
                      </span>
                    )}
                  </span>

                  <span className="ml-auto font-mono text-[8px] text-accent/40">
                    {skill.short}
                  </span>
                </a>
              </div>
            );
          })}
        </div>

        {/* =========================================
            CENTRAL INTELLIGENCE CORE
        ========================================= */}

        <div
          className="
            absolute left-1/2 top-1/2
            z-30
            h-[35%] w-[35%]
            -translate-x-1/2 -translate-y-1/2
          "
        >
          {/* core atmosphere */}

          <div className="absolute inset-[-45%] rounded-full bg-accent/[0.045] blur-[60px]" />

          {/* outer rotating ring */}

          <div
            className="
              absolute inset-[-19%]
              rounded-full
              border border-accent/20
            "
            style={{
              transform: `rotate(${time * -0.05}deg)`,
            }}
          />

          {/* segmented-looking ring */}

          <div
            className="
              absolute inset-[-14%]
              rounded-full
              border border-accent/35
            "
            style={{
              transform:
                `rotate(${time * 0.08}deg) scaleY(.7)`,
            }}
          />

          {/* bright scanning arc */}

          <div
            className="
              absolute inset-[-8%]
              rounded-full
              border-2
              border-transparent
              border-r-accent
              border-t-accent/70
            "
            style={{
              transform:
                `rotate(${time * 0.12}deg)`,
            }}
          />

          {/* photo */}

          <div
            className="
              relative h-full w-full
              overflow-hidden rounded-full
              border border-accent/70
              bg-surface
              shadow-[0_0_125px_-15px_rgba(0,212,232,.9)]
            "
            style={{
              transform: "rotate(-3deg)",
            }}
          >
            <Portrait />

            <div
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_50%_25%,transparent_38%,rgba(0,0,0,.18))]
              "
            />
          </div>

          {/* system online */}

          <div
            className="
              absolute -bottom-5 -right-10
              flex items-center gap-2
              rounded-full border border-line
              bg-[#080d12]/95
              px-4 py-2.5
              backdrop-blur-xl
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,212,232,1)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
              system online
            </span>
          </div>
        </div>

        {/* =========================================
            CORE IDENTITY
        ========================================= */}

        <div
          className="
            absolute left-1/2 top-[70%]
            z-50
            -translate-x-1/2
            text-center
          "
        >
          <p className="font-display text-xl font-bold tracking-tight text-body md:text-2xl">
            AI / ML
          </p>

          <div className="mx-auto mt-2 h-px w-12 bg-accent/60" />

          <p className="mt-2 font-mono text-[8px] font-medium uppercase tracking-[0.38em] text-accent">
            Intelligence Core
          </p>
        </div>

        {/* =========================================
            TELEMETRY
        ========================================= */}

        <div className="absolute left-[5%] top-[39%] z-20 hidden md:block">
          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-muted/50">
            SYSTEM
          </p>

          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-accent">
            ONLINE
          </p>
        </div>

        <div className="absolute right-[5%] bottom-[34%] z-20 hidden text-right md:block">
          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-muted/50">
            DOMAINS
          </p>

          <p className="mt-1 font-mono text-[9px] text-accent">
            05
          </p>
        </div>

        {/* signal points */}

        <span className="absolute left-[8%] top-[47%] h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_15px_rgba(0,212,232,1)]" />

        <span className="absolute right-[7%] top-[34%] h-1 w-1 rounded-full bg-accent shadow-[0_0_12px_rgba(0,212,232,.9)]" />

        <span className="absolute bottom-[16%] left-[20%] h-1 w-1 rounded-full bg-accent/70" />

        <span className="absolute bottom-[12%] right-[23%] h-1.5 w-1.5 rounded-full bg-accent/70 shadow-[0_0_12px_rgba(0,212,232,.8)]" />

        {/* cursor */}

        {cursor.active && (
          <div
            className="
              pointer-events-none
              absolute z-[60]
              h-4 w-4
              rounded-full
              border border-accent/70
            "
            style={{
              left: `${(cursor.x + 0.5) * 100}%`,
              top: `${(cursor.y + 0.5) * 100}%`,
              transform:
                "translate(-50%, -50%)",
              boxShadow:
                "0 0 25px rgba(0,212,232,.55)",
            }}
          />
        )}
      </div>

      {/* =========================================
          MOBILE DOMAINS
      ========================================= */}

      <div className="mt-5 flex flex-wrap justify-center gap-2 md:hidden">
        {SKILLS.map((skill) => (
          <a
            key={skill.label}
            href="#skills"
            className="
              rounded-xl
              border border-accent/20
              bg-[#080d12]/90
              px-4 py-2.5
              font-mono text-[9px]
              font-medium uppercase
              tracking-wide text-muted
              backdrop-blur-xl
              transition-all
              hover:border-accent
              hover:text-accent
            "
          >
            {skill.label}
          </a>
        ))}
      </div>
    </div>
  );
}