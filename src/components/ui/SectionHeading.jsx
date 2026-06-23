import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

/**
 * Reusable section heading with an optional eyebrow label and subtitle.
 * Animates in on scroll. Used across About, Values, Products, etc.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col ${alignment}`}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            light
              ? 'border-white/25 bg-white/10 text-brand-teal'
              : 'border-brand-teal/20 bg-brand-teal/10 text-brand-teal-dark'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/75' : 'text-ink-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
