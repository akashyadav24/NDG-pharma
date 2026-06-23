/**
 * Shared Framer Motion variants for consistent, premium animations
 * across the site. Centralizing them keeps timing & easing uniform.
 */

const EASE = [0.22, 1, 0.36, 1]; // easeOutExpo-ish

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Parent container that staggers children reveals. */
export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Standard viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, amount: 0.2 };
