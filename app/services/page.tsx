import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCategoryDetail from "@/components/ServiceCategoryDetail";
import Consultation from "@/components/Consultation";
import { serviceCategories, company } from "@/lib/content";

export const metadata: Metadata = {
    title: `Services | ${company.name}`,
    description:
        "Management consultancy, research and strategic advisory, corporate publishing, digital solutions, and professional training services.",
};

export default function ServicesPage() {
    return (
        <main className="bg-paper">
            <Header />

            <section className="relative overflow-hidden border-b border-line">
                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            "linear-gradient(#DDE2E8 1px, transparent 1px), linear-gradient(90deg, #DDE2E8 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
                    }}
                />

                <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-24">
                    <p className="font-mono text-xs uppercase tracking-widest text-insight">
                        Our services
                    </p>
                    <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                        Integrated services across strategy, communication, technology, and capability
                    </h1>

                    <nav aria-label="Jump to service area" className="mt-8 flex flex-wrap gap-2">
                        {serviceCategories.map((category, i) => (
                            <a
                                key={category.slug}
                                href={`#${category.slug}`}
                                className="rounded border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-authority hover:text-authority"
                            >
                                {String(i + 1).padStart(2, "0")} &middot; {category.name.split(",")[0]}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6">
                {serviceCategories.map((category, i) => (
                    <ServiceCategoryDetail key={category.slug} category={category} index={i} />
                ))}
            </section>

            <Consultation />
            <Footer />
        </main>
    );
}