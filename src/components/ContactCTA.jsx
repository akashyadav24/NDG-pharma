import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { COMPANY } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

/**
 * Full-width Contact CTA — deep-blue→teal gradient with subtle animated
 * background blobs and prominent call / email actions.
 */
export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cta-gradient py-24 lg:py-32">
      {/* Animated background elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-brand-teal/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-px relative z-10 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
          Get In Touch
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Partner With NDG Pharmaceutical
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Join our growing network of healthcare professionals, distributors,
          and hospitals.
        </motion.p>

        {/* Contact detail chips */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-9 flex max-w-xl flex-col items-stretch justify-center gap-4 sm:flex-row"
        >
          <a
            href={COMPANY.phoneHref}
            className="glass flex flex-1 items-center justify-center gap-3 rounded-2xl px-5 py-4 text-white transition-all duration-300 hover:bg-white/20"
          >
            <Phone className="h-5 w-5 text-brand-teal" />
            <span className="text-left leading-tight">
              <span className="block text-xs text-white/70">Phone</span>
              <span className="font-semibold">{COMPANY.phone}</span>
            </span>
          </a>
          <a
            href={COMPANY.emailHref}
            className="glass flex flex-1 items-center justify-center gap-3 rounded-2xl px-5 py-4 text-white transition-all duration-300 hover:bg-white/20"
          >
            <Mail className="h-5 w-5 text-brand-teal" />
            <span className="text-left leading-tight">
              <span className="block text-xs text-white/70">Email</span>
              <span className="break-all font-semibold">{COMPANY.email}</span>
            </span>
          </a>
        </motion.div>

        {/* Primary action buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={COMPANY.phoneHref}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-8 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:bg-brand-teal-dark hover:shadow-lift sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a
            href={COMPANY.emailHref}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:w-auto"
          >
            <Mail className="h-5 w-5" />
            Send Email
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
