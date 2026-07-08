export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Selected engagements
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted">
          This section is a placeholder — swap it for a short summary of two
          or three real engagements once you have write-ups ready to share
          publicly.
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
