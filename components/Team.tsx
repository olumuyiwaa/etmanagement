import Image from "next/image";
import { placeholderPhoto } from "@/lib/images";

const teamPlaceholders = [
  { link: "https://media.licdn.com/dms/image/v2/D4E03AQF33bAcidJT2g/profile-displayphoto-crop_800_800/B4EZy.umzKJcAI-/0/1772726416774?e=1785369600&v=beta&t=aSG5jWIjBUUBZ7k-CYp9jEfJ47MHbx7opCGgS0eFzZk", name: "Egbiremonlen Emmanuel", role: "Head of Strategy & Research" },
  { link: "https://media.licdn.com/dms/image/v2/D4D03AQGfn2BsG-r_wQ/profile-displayphoto-crop_800_800/B4DZg8v1WVGQAc-/0/1753365830669?e=1785369600&v=beta&t=hOth0HyLQtsd3XzOhgvoFSE3DrDJ52uk8kBWqPhEbxc", name: "Oladoyin Emmanuel", role: "Lead Software Engineer" },
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
            <div key={person.link}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-surface grayscale">
                <Image
                  src={person.link}
                  alt={`Headshot for ${person.role}`}
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
      </div>
    </section>
  );
}
