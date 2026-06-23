import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

/**
 * NDG Pharmaceutical — single-page landing.
 * Sections are composed top-to-bottom; the <main> wrapper aids accessibility
 * and SEO with a clear document outline.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-teal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <CoreValues />
        <Products />
        <WhyChooseUs />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
