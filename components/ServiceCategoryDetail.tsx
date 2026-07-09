"use client";

import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceIllustration from "@/components/ServiceIllustration";

// Adjust this import if ServiceCategory is defined elsewhere (e.g. "@/lib/types").
import type { ServiceCategory } from "@/lib/content";

export default function ServiceCategoryDetail({
                                                category,
                                                index,
                                              }: {
  category: ServiceCategory;
  index: number;
}) {
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
      <div
          id={category.slug}
          className="scroll-mt-24 border-b border-line py-16 last:border-b-0 md:py-20"
      >
        <div
            className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
                reversed ? "md:[&>*:first-child]:order-2" : ""
            }`}
        >
          <Reveal>
            {(visible) => <ServiceIllustration slug={category.slug} active={visible} />}
          </Reveal>

          <Reveal delayMs={100}>
            {(visible) => (
                <>
                  <p className="font-mono text-xs uppercase tracking-widest text-insight">
                    Area {number}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {category.name}
                  </h2>
                  <p className="mt-4 text-muted">{category.description}</p>

                  <ul className={`mt-6 gap-3 ${
                      index === 0
                          ? "grid md:grid-cols-2"
                          : "flex flex-col"
                  }`}>
                    {category.items.map((item, i) => (
                        <li
                            key={item}
                            className="flex items-start gap-3"
                            style={
                              visible
                                  ? {
                                    animation: "service-item-in 0.5s ease-out forwards",
                                    animationDelay: `${300 + i * 60}ms`,
                                  }
                                  : { opacity: 0 }
                            }
                        >
                          <Check size={16} className="mt-0.5 shrink-0 text-insight" />
                          <span className="text-sm text-ink transition-colors hover:text-authority">
                      {item}
                    </span>
                        </li>
                    ))}
                  </ul>
                </>
            )}
          </Reveal>
        </div>

        <style>{`
        @keyframes service-item-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          li[style*="service-item-in"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      </div>
  );
}