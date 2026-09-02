import { SITE } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-shell flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <div className="flex gap-6">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-body">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-body">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-body">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
