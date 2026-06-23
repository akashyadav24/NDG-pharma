import { motion } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  Pill,
  ShieldCheck,
  Microscope,
  Activity,
} from 'lucide-react';
import { COMPANY } from '../data/content';
import { fadeUp, staggerContainer } from '../utils/motion';

const scrollTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Full-viewport hero with a premium brand gradient, two-column layout,
 * floating glassmorphism info cards and subtle animated background shapes.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient pt-24 pb-16 lg:pt-20"
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-px relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* LEFT — copy */}
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-teal" />
              Founded in {COMPANY.location}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              NDG Pharmaceutical
              <span className="block text-gradient">Pvt. Ltd.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-xl font-semibold text-white/90 sm:text-2xl"
            >
              {COMPANY.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Delivering high-quality pharmaceutical solutions trusted by
              doctors, hospitals, and healthcare professionals across India.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:bg-brand-teal-dark hover:shadow-lift"
              >
                Get In Touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#products"
                onClick={(e) => scrollTo(e, '#products')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                View Products
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-teal" />
                Quality Assured
              </span>
              <span className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-brand-teal" />
                Trusted Nationwide
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Main image placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-lift backdrop-blur-sm">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 text-white">
                  <Microscope className="h-10 w-10" strokeWidth={1.5} />
                </span>
                <span className="px-8 text-sm font-medium text-white/80">
                  Pharmaceutical Manufacturing &amp; Research Facility
                </span>
                <span className="text-xs uppercase tracking-widest text-white/50">
                  Image Placeholder
                </span>
              </div>
              {/* glossy sheen */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15"
                aria-hidden="true"
              />
            </div>

            {/* Floating card — top left */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute -left-4 top-10 hidden rounded-2xl p-4 shadow-card sm:flex sm:items-center sm:gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal text-white">
                <Pill className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-lg font-extrabold text-white">50+</p>
                <p className="text-xs text-white/75">Quality Products</p>
              </div>
            </motion.div>

            {/* Floating card — bottom right */}
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="glass absolute -right-4 bottom-12 hidden rounded-2xl p-4 shadow-card sm:flex sm:items-center sm:gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-blue">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-lg font-extrabold text-white">500+</p>
                <p className="text-xs text-white/75">Doctors Trust Us</p>
              </div>
            </motion.div>

            {/* Pulse ring accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-brand-teal/40 animate-pulse-ring"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/0"
      />
    </section>
  );
}
