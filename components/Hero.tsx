import ConvergenceDiagram from "./ConvergenceDiagram";
import { company } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div className="dot-grid-bg dot-grid-fade absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="mb-6 font-mono text-s uppercase tracking-[0.2em] text-insight">
            {company.strapline}
          </p>
          <p className="font-display text-l font-semibold leading-[1.1] tracking-tight text-ink md:text-4xl">
            {company.aboutLead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="contact"
              className="rounded bg-action px-6 py-3 font-mono text-sm uppercase tracking-widest text-paper transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="rounded border border-line px-6 py-3 font-mono text-sm uppercase tracking-widest text-ink transition-colors hover:border-authority hover:text-authority"
            >
              Our services
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ConvergenceDiagram />
        </div>
      </div>
    </section>
  );
}
