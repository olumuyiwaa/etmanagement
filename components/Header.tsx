"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { navLinks, company } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
          >
            <Image
                src="/logo.png"
                alt="site logo"
                width={40}
                height={40}
                className="rounded-lg"
                priority
            />
            {company.shortName}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
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

          {/* Desktop CTA */}
          <Link
              href="/contact"
              className="hidden rounded bg-action px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-transform hover:scale-[1.03] md:block"
          >
            Get in touch
          </Link>

          {/* Mobile Menu Button */}
          <button
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 text-ink transition hover:bg-surface md:hidden"
              aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
            className={`overflow-hidden border-t border-line bg-paper transition-all duration-300 md:hidden ${
                open ? "max-h-96" : "max-h-0"
            }`}
        >
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-authority"
                >
                  {link.label}
                </Link>
            ))}

            <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded bg-action px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-paper"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      </header>
  );
}