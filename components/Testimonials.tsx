export default function Testimonials() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-insight">
          Client feedback
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          What our clients say
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-dashed border-line bg-surface p-8"
            >
              <p className="text-muted">
                Placeholder — add a real client quote here once available.
              </p>
              <footer className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
                Client name &mdash; Role, Organisation
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
