import { Mail, Phone, MessageCircle } from "lucide-react";
import LottieAnimation, { PLACEHOLDER_LOTTIE_SRC } from "./LottieAnimation";
import { contact } from "@/lib/content";

export default function Cta() {
  return (
    <section id="cta" className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
        <div className="h-20 w-20">
          <LottieAnimation src={PLACEHOLDER_LOTTIE_SRC} className="h-full w-full" />
        </div>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Have a strategic objective in mind?
        </h2>
        <p className="mt-4 text-muted">
          Tell us what you&apos;re trying to solve, and we&apos;ll follow up to
          discuss how our team can support it.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-8 inline-block rounded-full bg-action px-8 py-3 font-mono text-sm uppercase tracking-widest text-paper transition-transform hover:scale-[1.03]"
        >
          Get in touch
        </a>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-authority"
          >
            <Mail size={14} /> {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-authority"
          >
            <Phone size={14} /> {contact.phoneDisplay}
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-authority"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
