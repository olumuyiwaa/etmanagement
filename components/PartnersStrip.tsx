import Image from "next/image";

const clientLogos = [
    { src: "/logos/logo1.png", alt: "Client One" },
    { src: "/logos/logo2.png", alt: "Client Two" },
    { src: "/logos/logo4.png", alt: "Client Four" },
    { src: "/logos/logo5.png", alt: "Client Five" },
    { src: "/logos/logo3.png", alt: "Client Three" },
];
export default function PartnersStrip() {
  return (
      <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-12">
              <p className="text-center font-mono text-xs uppercase tracking-widest text-muted">
                  Trusted by organisations across sectors
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                  {clientLogos.map((logo) => (
                      <div
                          key={logo.src}
                          className="flex h-14 items-center justify-center rounded-lg border border-line px-4"
                      >
                          <Image
                              src={logo.src}
                              alt={logo.alt}
                              width={132}
                              height={54}
                              className="max-h-8 w-auto object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
                          />
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
}
