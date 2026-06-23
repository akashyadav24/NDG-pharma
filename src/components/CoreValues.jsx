import { motion } from 'framer-motion';
import { CORE_VALUES } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import SectionHeading from './ui/SectionHeading';

/**
 * Core Values — four premium cards with icons, teal highlight on hover,
 * and a lift animation.
 */
export default function CoreValues() {
  return (
    <section className="bg-surface-light py-24 lg:py-32">
      <div className="container-px">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow="Our Values"
            title="Our Commitment to Healthcare"
            subtitle="The principles that guide everything we do — from research and manufacturing to the relationships we build."
          />
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CORE_VALUES.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-surface-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand-teal/40 hover:shadow-card"
            >
              {/* teal highlight wash on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-brand-teal/0 to-brand-teal/0 transition-all duration-300 group-hover:from-brand-teal/5 group-hover:to-transparent"
              />

              <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-soft transition-all duration-300 group-hover:bg-brand-teal group-hover:shadow-glow">
                <Icon className="h-7 w-7" strokeWidth={1.7} />
              </span>

              <h3 className="relative text-lg font-bold text-brand-dark">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-secondary">
                {description}
              </p>

              {/* bottom accent bar */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-teal transition-all duration-300 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
