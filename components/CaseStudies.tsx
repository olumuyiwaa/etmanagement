export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Selected Engagements
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted">
          Here are some selected engagements from. Turning bold ideas into market-ready products with speed and confidence.
          We've partnered with ambitious founders to transform concepts into success.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-dashed border-line bg-paper p-8"
            >
              <h3 className="font-display text-xl font-medium text-muted">
                Engagement name
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A short, factual summary of the engagement and outcome goes
                here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
