import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import SectionHeading from './ui/SectionHeading';
import ImagePlaceholder from './ui/ImagePlaceholder';

/**
 * Why Choose Us — trust checklist of six points beside a supporting image.
 */
export default function WhyChooseUs() {
  return (
    <section className="bg-surface-light py-24 lg:py-32">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — copy + checklist */}
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why Healthcare Professionals Trust Us"
              subtitle="A partner committed to quality, reliability, and ethical healthcare at every step."
              align="left"
            />

            <motion.ul
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {WHY_CHOOSE_US.map(({ icon: Icon, title }) => (
                <motion.li
                  key={title}
                  variants={fadeUp}
                  className="group flex items-center gap-3 rounded-xl border border-surface-border bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal-dark transition-colors duration-300 group-hover:bg-brand-teal group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <span className="text-sm font-semibold text-brand-dark">
                    {title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — imagery */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first lg:order-last"
          >
            <ImagePlaceholder
              icon={ShieldCheck}
              label="Quality Healthcare Professionals"
              variant="dark"
              className="aspect-[4/3] rounded-3xl shadow-card"
            />
            <div className="absolute -left-2 -top-6 rounded-2xl bg-white p-5 shadow-lift sm:-left-6">
              <p className="text-3xl font-extrabold leading-none text-brand-dark">
                100<span className="text-brand-teal">%</span>
              </p>
              <p className="mt-1 text-xs font-medium text-ink-secondary">
                Quality
                <br />
                Commitment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
