/**
 * Branded image placeholder. Stands in for client-supplied photography
 * (manufacturing, labs, packaging, research, healthcare professionals).
 * Uses a subtle gradient + dotted grid + an icon and caption so the
 * layout reads as "real" while remaining an obvious placeholder.
 */
export default function ImagePlaceholder({
  icon: Icon,
  label,
  className = '',
  variant = 'light',
}) {
  const isDark = variant === 'dark';

  return (
    <div
      role="img"
      aria-label={`${label} image placeholder`}
      className={`relative flex items-center justify-center overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-brand-dark via-brand-blue to-brand-teal-dark'
          : 'bg-gradient-to-br from-surface-light via-white to-brand-teal/5'
      } ${className}`}
    >
      {/* Dotted grid texture */}
      <div
        className={`absolute inset-0 ${isDark ? 'opacity-[0.12]' : 'dot-grid opacity-70'}`}
        aria-hidden="true"
      />

      {/* Decorative blurred blob */}
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-teal/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        {Icon && (
          <span
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
              isDark
                ? 'bg-white/15 text-white'
                : 'bg-white text-brand-blue shadow-soft'
            }`}
          >
            <Icon className="h-8 w-8" strokeWidth={1.6} />
          </span>
        )}
        <span
          className={`text-sm font-medium ${
            isDark ? 'text-white/80' : 'text-ink-secondary'
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
