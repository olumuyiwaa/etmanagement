import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import {company, contact} from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: `Services | ${company.name}`,
    description:
        "Management consultancy, research and strategic advisory, corporate publishing, digital solutions, and professional training services.",
};

export default function ContactPage() {
    return (

        <main className="bg-paper">
            <Header />
        <section className="dot-grid-bg inset-0">
            <div className="mx-auto max-w-5xl px-6 py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                        Have a strategic objective in mind?
                    </h1>
                    <p className="mt-4 text-muted">
                        Tell us what you&apos;re trying to solve, and we&apos;ll follow up to discuss how our
                        team can support it.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                        <ContactForm />
                    </div>

                    <div className="lg:col-span-2">
                        <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-8">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                                    Direct contact
                                </p>

                                <div className="mt-5 flex flex-col gap-4">
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-3 font-mono text-sm text-ink hover:text-authority"
                                    >
                                        <div className="flex items-start gap-3">
                                            <Mail size={16} className="shrink-0 text-muted" />
                                            <p className="text-sm text-ink">
                                                Email Us
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href={contact.phoneHref}
                                        className="flex items-center gap-3 font-mono text-sm text-ink hover:text-authority"
                                    >
                                        <Phone size={16} className="shrink-0 text-muted" /> {contact.phoneDisplay}
                                    </a>
                                    <a
                                        href={contact.whatsappHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 font-mono text-sm text-ink hover:text-authority"
                                    >
                                        <MessageCircle size={16} className="shrink-0 text-muted" /> WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="mt-10 border-t border-line pt-8">
                                <p className="font-mono text-xs uppercase tracking-widest text-muted">Office</p>
                                <div className="mt-5 flex flex-col gap-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={16} className="mt-0.5 shrink-0 text-muted" />
                                        <p className="text-sm text-ink">
                                            {contact.address}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock size={16} className="mt-0.5 shrink-0 text-muted" />
                                        {/* TODO: confirm actual business hours */}
                                        <p className="text-sm text-ink">
                                            Mon&ndash;Fri, 9:00&ndash;17:00 WAT
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <Footer />
        </main>
    );
}