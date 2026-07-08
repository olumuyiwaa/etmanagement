import Link from "next/link";
import { navLinks, company } from "@/lib/content";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink flex items-center gap-2">
          <Image
              src="/logo.png"
              alt="site logo"
              width={40}
              height={40}
              className="relative rounded-lg overflow-hidden flex items-center justify-center"
              priority
          />
          {company.shortName}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-authority"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-action px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-transform hover:scale-[1.03]"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
