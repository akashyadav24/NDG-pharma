import { COMPANY } from '../../data/content';

/**
 * Brand logo.
 *
 * Renders the official NDG Pharmaceutical logo from `/public/logo.png`.
 * The artwork is a full lockup (icon + "NDG" wordmark + "PHARMACEUTICAL PVT
 * LTD"), so no adjacent text is needed.
 *
 * Because the supplied artwork sits on a white background, on dark surfaces
 * (transparent navbar over the hero, the footer) we wrap it in a subtle white
 * "chip" so it always reads cleanly. Set `chip={false}` on light backgrounds.
 *
 * @param {string}  className  Extra classes for the <img> (control height).
 * @param {boolean} chip       Wrap in a white rounded container (for dark bg).
 */
export default function Logo({ className = 'h-11 w-auto', chip = false }) {
  const img = (
    <img
      src="/logo.png"
      alt={`${COMPANY.name} logo`}
      className={className}
      loading="eager"
      decoding="async"
      width="240"
      height="120"
    />
  );

  if (!chip) return img;

  return (
    <span className="inline-flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-soft">
      {img}
    </span>
  );
}
