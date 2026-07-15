import Image from "next/image";
import {testimonials} from "@/lib/content";
import {placeholderPhoto} from "@/lib/images";

export default function Testimonials() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-insight">
          Client feedback
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          What our clients say
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((client, index) => (
              <div
                  key={client.name}
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-9 shadow-sm hover:shadow-xl transition-all duration-100 group"
              >
                <div className="text-orange-500 text-6xl opacity-20">“</div>

                <p className="italic text-zinc-600 text-[14px] leading-relaxed mb-8">
                  {client.quote}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative mx-auto h-20 w-32 overflow-hidden rounded-2xl border border-line bg-surface grayscale">
                    <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{client.name}</div>
                    <div className="text-sm text-zinc-500">
                      {client.role} {client.organisation && `at ${client.organisation}`}
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
