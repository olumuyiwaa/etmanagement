import Link from "next/link";
import {
  LineChart,
  Presentation,
  MonitorSmartphone,
  GraduationCap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { serviceCategories } from "@/lib/content";

const iconBySlug: Record<string, LucideIcon> = {
  "consultancy-research-strategy": LineChart,
  "corporate-publishing-communication": Presentation,
  "digital-branding-technology": MonitorSmartphone,
  "training-capacity-development": GraduationCap,
};

export default function Services() {
  return (
    <section id="services" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-insight">
              What we do
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Integrated services, one accountable partner
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-action hover:underline"
          >
            View all services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {serviceCategories.map((category) => {
            const Icon = iconBySlug[category.slug] ?? LineChart;
            return (
              <Link
                key={category.slug}
                href={`/services#${category.slug}`}
                className="group rounded-2xl border border-line bg-paper p-8 transition-colors hover:border-authority/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-authority">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-ink">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-action opacity-0 transition-opacity group-hover:opacity-100">
                  See services <ArrowRight size={12} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
