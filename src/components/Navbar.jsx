import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../data/content';
import Logo from './ui/Logo';

/**
 * Sticky navigation bar.
 * - Transparent over the hero, transitions to solid white + shadow on scroll.
 * - Smooth-scrolling anchor links and a mobile drawer.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the "scrolled" state to switch the navbar to its solid variant.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkColor = scrolled ? 'text-ink-primary' : 'text-white';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-px flex h-16 items-center justify-between lg:h-20"
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center"
          aria-label={`${COMPANY.name} — home`}
        >
          {/* On the transparent (over-hero) state we wrap the white-background
              artwork in a chip; once scrolled the navbar is white, so no chip. */}
          <Logo
            chip={!scrolled}
            className="h-9 w-auto transition-all duration-300 lg:h-11"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative text-sm font-semibold transition-colors hover:text-brand-teal ${linkColor}`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-brand-teal transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden items-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-brand-teal-dark hover:shadow-lift lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Contact Us
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
            scrolled ? 'text-brand-dark' : 'text-white'
          }`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-surface-border bg-white lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-ink-primary transition-colors hover:bg-surface-light hover:text-brand-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-teal px-5 py-3 text-base font-semibold text-white shadow-glow"
                >
                  <Phone className="h-4 w-4" />
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
