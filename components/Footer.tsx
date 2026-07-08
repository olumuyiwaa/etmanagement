import { MapPin, Mail, Phone } from "lucide-react";
import { company, contact } from "@/lib/content";
import Image from "next/image";

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <Image
                src="/logo.png"
                alt="site logo"
                width={40}
                height={40}
                className="relative rounded-lg overflow-hidden flex items-center justify-center"
                priority
            />
            <div className="font-display text-lg font-semibold text-ink mt-4">
              {company.name}
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {company.strapline}
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              Page
            </div>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li><a href="/" className="hover:text-authority">Home</a></li>
              <li><a href="/#about" className="hover:text-authority">About</a></li>
              <li><a href="/services" className="hover:text-authority">Services</a></li>
              <li><a href="/contact" className="hover:text-authority">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              Contact
            </div>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-muted" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-muted" />
                <a href={`mailto:${contact.email}`} className="hover:text-authority break-all">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-muted" />
                <a href={contact.phoneHref} className="hover:text-authority">
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-5 font-mono text-xs uppercase tracking-widest text-muted">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-authority"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
