import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { ABOUT_FEATURES, COMPANY } from '../data/content';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import SectionHeading from './ui/SectionHeading';
import ImagePlaceholder from './ui/ImagePlaceholder';

/**
 * About section — two-column layout: imagery on the left, mission copy and
 * three feature points on the right.
 */
export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — imagery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <ImagePlaceholder
              icon={Building2}
              label="NDG Pharmaceutical Facility"
              className="aspect-[4/3] rounded-3xl shadow-card"
            />

            {/* Floating accent badge */}
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-brand-blue p-5 text-white shadow-lift sm:-right-6">
              <p className="text-3xl font-extrabold leading-none">
                5<span className="text-brand-teal">+</span>
              </p>
              <p className="mt-1 text-xs font-medium text-white/80">
                Years of Trusted
                <br />
                Healthcare Service
              </p>
            </div>
          </motion.div>

          {/* RIGHT — copy */}
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="About NDG Pharmaceutical"
              align="left"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-6 space-y-4 text-base leading-relaxed text-ink-secondary"
            >
              <p>
                Founded in {COMPANY.location}, NDG Pharmaceutical Pvt. Ltd. is
                committed to delivering quality healthcare solutions and building
                trusted relationships across the healthcare ecosystem.
              </p>
              <p>
                Our mission is to provide safe, effective, and reliable
                pharmaceutical products while maintaining the highest standards
                of quality and integrity.
              </p>
            </motion.div>

            {/* Feature points */}
            <motion.ul
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 space-y-4"
            >
              {ABOUT_FEATURES.map(({ icon: Icon, title, description }) => (
                <motion.li
                  key={title}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-2xl border border-surface-border bg-surface-light p-4 transition-all duration-300 hover:border-brand-teal/30 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal-dark">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 text-base font-bold text-brand-dark">
                      {title}
                      <CheckCircle2 className="h-4 w-4 text-brand-teal" />
                    </h3>
                    <p className="mt-1 text-sm text-ink-secondary">
                      {description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
