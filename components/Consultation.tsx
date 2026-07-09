import { consultation } from "@/lib/content";

export default function Consultation() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-insight">
          {consultation.heading}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          {consultation.body}
        </p>
        <a
          href="contact"
          className="mt-8 inline-block rounded bg-action px-8 py-3 font-mono text-sm uppercase tracking-widest text-paper transition-transform hover:scale-[1.03]"
        >
          Book a consultation
        </a>
      </div>
    </section>
  );
}
