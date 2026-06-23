import { Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../data/content';
import Logo from './ui/Logo';

const SOCIALS = [
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Instagram', href: '#', Icon: Instagram },
];

const scrollTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

/** Corporate footer with brand, quick links, contact info, and socials. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, '#home')}
              className="inline-flex items-center"
              aria-label={`${COMPANY.name} — home`}
            >
              {/* White chip so the white-background artwork reads on the dark footer */}
              <Logo chip className="h-12 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {COMPANY.tagline}. Delivering high-quality pharmaceutical solutions
              trusted by doctors, hospitals, and healthcare professionals across
              India.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:border-brand-teal hover:bg-brand-teal hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-white/60 transition-colors hover:text-brand-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 text-white/60 transition-colors hover:text-brand-teal"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-teal" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-center gap-3 break-all text-white/60 transition-colors hover:text-brand-teal"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-teal" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <span className="mt-0.5 text-brand-teal">●</span>
                Founded in {COMPANY.location}, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {year} NDG Pharmaceutical Pvt. Ltd. All Rights Reserved.
          </p>
          <p>Your Partner in Health &amp; Wellness</p>
        </div>
      </div>
    </footer>
  );
}
