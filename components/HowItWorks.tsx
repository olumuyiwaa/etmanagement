import { SearchCheck, MessagesSquare, PackageCheck, type LucideIcon } from "lucide-react";
import { processSteps } from "@/lib/content";

const iconByStep: Record<number, LucideIcon> = {
  1: SearchCheck,
  2: MessagesSquare,
  3: PackageCheck,
};

export default function HowItWorks() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-insight">
          How we work
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Three stages, one clear line of accountability
        </h2>

        <ol className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {processSteps.map((item, i) => {
            const Icon = iconByStep[item.step] ?? SearchCheck;
            return (
              <li key={item.step} className="relative pl-2">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-authority">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-4xl font-semibold text-line">
                    0{item.step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute right-[-1.25rem] top-3 hidden h-px w-8 bg-line md:block"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
