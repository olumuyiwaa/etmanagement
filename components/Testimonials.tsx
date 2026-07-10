import Image from "next/image";
import {placeholderPhoto} from "@/lib/images";
import {testimonials} from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
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
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-9 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-orange-500 text-6xl opacity-20">“</div>

                <p className="italic text-zinc-600 text-[14px] leading-relaxed mb-8">
                  {client.quote}
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden ring-2 ring-orange-100">
                    <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
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
