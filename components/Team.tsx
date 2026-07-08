import Image from "next/image";
import { placeholderPhoto } from "@/lib/images";

const teamPlaceholders = [
  { seed: "et-partner-1", name: "Partner name", role: "Managing Partner" },
  { seed: "et-partner-2", name: "Partner name", role: "Head of Strategy" },
  { seed: "et-partner-3", name: "Partner name", role: "Head of Research" },
  { seed: "et-partner-4", name: "Partner name", role: "Head of Advisory" },
];

export default function Team() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-insight">
          Our people
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          The team behind the work
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {teamPlaceholders.map((person) => (
            <div key={person.seed}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface grayscale">
                <Image
                  src={placeholderPhoto(person.seed, 400, 400)}
                  alt={`Placeholder headshot for ${person.role}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
              <p className="mt-3 font-display text-sm font-medium text-ink">
                {person.name}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {person.role}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">
          Placeholder photos — replace with real team headshots and names
          before this goes live.
        </p>
      </div>
    </section>
  );
}
