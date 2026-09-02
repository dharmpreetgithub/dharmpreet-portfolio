"use client";

import { useState } from "react";
import { SITE } from "@/lib/links";

export default function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={SITE.photo}
          alt={`${SITE.name}, ${SITE.role}`}
          onError={() => setFailed(true)}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#0A5F6B] via-surface to-ink"
          role="img"
          aria-label={`${SITE.name}, ${SITE.role} — photo placeholder`}
        >
          <span className="font-display text-5xl font-semibold text-accent">
            {SITE.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}
