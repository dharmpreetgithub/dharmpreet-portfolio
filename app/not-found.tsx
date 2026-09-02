import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[70vh] flex-col items-center justify-center pt-20 text-center">
      <p className="mb-4 font-mono text-sm text-accent">404</p>
      <h1 className="mb-6 font-display text-display-md font-semibold text-body">
        This page doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="rounded-full bg-body px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent"
      >
        Back home
      </Link>
    </div>
  );
}

