import { Target, Presentation, Layers, ShieldCheck, Headset, type LucideIcon } from "lucide-react";
import {company, whyWorkWithUs} from "@/lib/content";

const icons: LucideIcon[] = [Target, Presentation, Layers, ShieldCheck, Headset];

export default function WhyWorkWithUs() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-insight">
          Why work with us
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {whyWorkWithUs.tagline}
        </h2>

        <p className="mt-6 text-l leading-relaxed text-ink md:text-l">
          {whyWorkWithUs.body}
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {whyWorkWithUs.points.map((point, i) => {
            const Icon = icons[i] ?? Target;
            return (
              <li key={point.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-authority">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <p className="text-ink">{point.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
