/**
 * Centralized site content for NDG Pharmaceutical.
 * Keeping copy & data here keeps components clean and makes future
 * client-supplied content (products, stats, etc.) easy to swap in.
 */

import {
  Award,
  Lightbulb,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Building2,
  Users,
  Boxes,
  CalendarClock,
  Network,
  BadgeCheck,
  Truck,
  Headphones,
  Scale,
  TrendingUp,
} from 'lucide-react';

export const COMPANY = {
  name: 'NDG Pharmaceutical Pvt. Ltd.',
  shortName: 'NDG Pharmaceutical',
  tagline: 'Your Partner in Health & Wellness',
  location: 'Haridwar',
  phone: '8859111185',
  phoneHref: 'tel:+918859111185',
  email: 'info@ndgpharmaceutical.com',
  emailHref: 'mailto:info@ndgpharmaceutical.com',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { icon: CalendarClock, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: Boxes, value: 50, suffix: '+', label: 'Products' },
  { icon: Network, value: 500, suffix: '+', label: 'Distribution Network' },
  { icon: Building2, value: 100, suffix: '+', label: 'Hospitals Served' },
  { icon: Stethoscope, value: 500, suffix: '+', label: 'Doctors Trust Our Brands' },
];

export const ABOUT_FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Every product meets rigorous quality and safety standards before it reaches you.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Continuous research and modern formulations for better health outcomes.',
  },
  {
    icon: HeartPulse,
    title: 'Trust & Reliability',
    description:
      'Dependable supply and consistent quality the healthcare community relies on.',
  },
];

export const CORE_VALUES = [
  {
    icon: Award,
    title: 'Quality Assurance',
    description:
      'Stringent quality control at every stage ensures safe, effective, and dependable products.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We invest in research and modern manufacturing to advance healthcare solutions.',
  },
  {
    icon: HeartPulse,
    title: 'Patient-Centric Approach',
    description:
      'Patient wellbeing guides every decision, from formulation to final delivery.',
  },
  {
    icon: Scale,
    title: 'Ethical Healthcare',
    description:
      'Integrity and transparency define how we serve doctors, partners, and patients.',
  },
];

export const PRODUCTS = [
  {
    name: 'Procap-G',
    category: 'Gut Health & Immunity',
    composition: 'Prebiotic, Probiotic & Immunobiotic Capsules',
    description:
      'The synergy of 3 — feeds and replenishes good bacteria while supporting immunity for better digestion and a balanced gut microbiome.',
    image: `${import.meta.env.BASE_URL}products/procap-g.png`,
  },
  {
    name: 'AMSLIV-M',
    category: 'Allergy Relief',
    composition: 'Levocetirizine 5 mg + Montelukast 10 mg',
    description:
      'Dual-action allergy relief from sneezing, runny nose, nasal congestion and allergic asthma — long-lasting comfort, day and night.',
    image: `${import.meta.env.BASE_URL}products/amsliv-m.png`,
  },
  {
    name: 'CALCICAL-NDG',
    category: 'Bone Health',
    composition: 'Calcitriol, Calcium Carbonate & Zinc Capsules',
    description:
      'Advanced bone-health formula that improves calcium absorption, strengthens bones and teeth, and supports joint health.',
    image: `${import.meta.env.BASE_URL}products/calcical-ndg.png`,
  },
  {
    name: 'LYCOVIT-NDG',
    category: 'Daily Nutrition',
    composition: 'Ginseng, Lycopene & Green Tea Extract Tablets',
    description:
      'Multivitamins, minerals & antioxidants that support immunity, energy and cellular health for everyday vitality.',
    image: `${import.meta.env.BASE_URL}products/lycovit-ndg.png`,
  },
];

export const WHY_CHOOSE_US = [
  { icon: BadgeCheck, title: 'Consistent Product Quality' },
  { icon: Stethoscope, title: 'Trusted by Doctors' },
  { icon: Truck, title: 'Strong Distribution Network' },
  { icon: Headphones, title: 'Reliable Support' },
  { icon: Scale, title: 'Ethical Business Practices' },
  { icon: TrendingUp, title: 'Commitment to Excellence' },
];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
  { label: 'Facebook', href: '#', icon: 'Facebook' },
  { label: 'Instagram', href: '#', icon: 'Instagram' },
];

// Re-export icons that are referenced directly by components
export { Users };
