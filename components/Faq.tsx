"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-ink md:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`font-mono text-xl text-insight transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
