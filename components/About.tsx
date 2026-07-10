import Image from "next/image";
import { company } from "@/lib/content";
import { placeholderPhoto } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-surface py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-4 md:items-center mb-12">
        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-insight">
            About us
          </p>
          <p className="mt-6 text-l leading-relaxed text-ink md:text-l">
            {company.aboutBody}
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line">
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <div className="relative aspect-[7/4] overflow-hidden rounded-2xl border border-line">
            <Image
                src="/Picture2.jpg"
                alt="work photo"
                // width={640}
                // height={640}
                fill={true}
                className="object-cover"
                priority
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-insight">
            Our Credentials
          </p>
          <p className="mt-6 text-l leading-relaxed text-ink md:text-l">
            {company.credentialBody}
          </p>
        </div>
      </div>
    </section>
  );
}
