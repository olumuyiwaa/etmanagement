import Image from "next/image";

export default function CaseStudies() {
  const engagements = [
    {
      name: "Leadership Retreat & Strategic Planning",
      summary:
          "Designed and facilitated a 5-day executive retreat, delivering leadership training and presentation materials to strengthen organisational alignment and long-term strategic planning.",
      image: "/successful-business-team-planning.jpg",
    },
    // {
    //   name: "Financial Modelling for Last-Mile Logistics",
    //   summary:
    //       "Built an investor-grade financial model and operational planning framework for a last-mile delivery startup, supporting pricing, capital raising, and growth decisions.",
    //   // image: "/case-studies/logistics-financial-model.jpg",
    // },
    // {
    //   name: "Digital Health Platform Strategy",
    //   summary:
    //       "Led market research, business analysis, and requirements definition for a digital health platform, validating demand and producing the documentation to guide product and software development.",
    // },
    {
      name: "Growth Strategy for 3PL Logistics Provider",
      summary:
          "Developed a long-term growth strategy, financial model, and expansion roadmap to help a logistics operator scale into a technology-enabled 3PL provider across Nigeria and West Africa.",
      image: "/3pl-growth-strategy.jpg",
    },
    {
      name: "Healthcare Staffing Platform Architecture",
      summary:
          "Defined product strategy, business analysis, and solution architecture for an on-demand healthcare staffing marketplace connecting facilities with qualified professionals.",
      image: "/desktop-dashboard.png",
    },
  ];

  return (
      <section id="case-studies" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Selected Engagements
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted">
            Here are some selected engagements showing how we have been turning bold ideas into market-ready products with speed and confidence.
            We've partnered with ambitious founders to transform concepts into success.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engagements.map((engagement, i) => (
                <div
                    key={i}
                    className="overflow-hidden rounded-2xl border border-line bg-paper"
                >
                  {engagement.image && (
                      <div className="relative h-52 w-full">
                        <Image
                            src={engagement.image}
                            alt={engagement.name}
                            fill
                            className="object-cover"
                        />
                      </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {engagement.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {engagement.summary}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}