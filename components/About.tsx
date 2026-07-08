import Image from "next/image";
import { company } from "@/lib/content";
import { placeholderPhoto } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-widest text-insight">
            About us
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
            {company.aboutBody}
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
            <Image
                src="/Picture1.jpg"
                alt="office photo"
                // width={640}
                // height={640}
                fill={true}
                className="object-cover"
                priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
