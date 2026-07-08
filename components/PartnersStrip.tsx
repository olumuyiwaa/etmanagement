const placeholderCount = 5;

export default function PartnersStrip() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-muted">
          Trusted by organisations across sectors
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div
              key={i}
              className="flex h-14 items-center justify-center rounded-lg border border-dashed border-line text-xs text-muted"
            >
              Logo placeholder
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
