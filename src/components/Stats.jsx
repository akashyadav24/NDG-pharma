import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import useCountUp from '../hooks/useCountUp';

/** A single stat card with an animated counter. */
function StatCard({ stat, active }) {
  const { icon: Icon, value, suffix, label } = stat;
  const count = useCountUp(value, active);

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col items-center rounded-2xl border border-surface-border bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand-teal/30 hover:shadow-card"
    >
      {/* top accent line */}
      <span className="absolute inset-x-0 top-0 mx-auto h-1 w-0 rounded-full bg-brand-teal transition-all duration-300 group-hover:w-2/3" />

      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-teal-dark transition-colors duration-300 group-hover:bg-brand-teal group-hover:text-white">
        <Icon className="h-7 w-7" strokeWidth={1.8} />
      </span>

      <p className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
        {count}
        <span className="text-brand-teal">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-ink-secondary">{label}</p>
    </motion.div>
  );
}

/**
 * Statistics band — 5 premium cards with counters that animate when the
 * section scrolls into view.
 */
export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative z-20 -mt-12 bg-transparent sm:-mt-16"
      aria-label="Company statistics"
    >
      <div className="container-px">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
