import { motion } from 'framer-motion';
import { Pill, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import SectionHeading from './ui/SectionHeading';

const scrollTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Top Selling Products — 4 premium product cards.
 * Responsive: 4 cols (desktop) / 2 cols (tablet) / 1 col (mobile).
 * Images are placeholders until the client supplies real product photos.
 */
export default function Products() {
  return (
    <section id="products" className="bg-white py-24 lg:py-32">
      <div className="container-px">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow="Our Products"
            title="Our Top Selling Products"
            subtitle="Trusted healthcare solutions designed for better outcomes."
          />
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
            >
              {/* Product image (falls back to an icon if the file is missing) */}
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-surface-light to-brand-teal/5">
                <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
                {/* Fallback icon sits behind the image */}
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-soft">
                  <Pill className="h-8 w-8" strokeWidth={1.6} />
                </span>
                {product.image && (
                  <img
                    src={product.image}
                    alt={`${product.name} — ${product.composition}`}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-brand-blue/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-soft backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-dark">
                  {product.name}
                </h3>
                {product.composition && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-teal-dark">
                    {product.composition}
                  </p>
                )}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
                  {product.description}
                </p>

                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-dark transition-colors hover:text-brand-teal"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-center text-sm text-ink-secondary"
        >
          A selection from our range — full product catalogue available on
          request.
        </motion.p>
      </div>
    </section>
  );
}
