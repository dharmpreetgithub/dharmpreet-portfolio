export default function PipelineDiagram({ steps }: { steps: string[] }) {
  return (
    // Scrolls horizontally on its own if the pipeline is long, rather than
    // ever pushing the page itself into horizontal overflow.
    <div className="-mx-1 overflow-x-auto px-1 pb-2">
      <div
        className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-3"
        role="img"
        aria-label={`Pipeline: ${steps.join(" leading to ")}`}
      >
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center gap-3 md:flex-row">
            <div className="w-full shrink-0 rounded-xl border border-line bg-surface px-5 py-4 text-center md:w-auto">
              <span className="whitespace-nowrap font-mono text-sm text-body">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="font-mono text-accent">
                <span className="block md:hidden">↓</span>
                <span className="hidden md:block">→</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
