import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `end` once `active` becomes true.
 * Uses requestAnimationFrame with an ease-out curve for a premium feel.
 *
 * @param {number} end       Target value to count up to.
 * @param {boolean} active   When true, the animation starts (e.g. in-view).
 * @param {number} duration  Animation duration in ms.
 * @returns {number} The current animated value.
 */
export default function useCountUp(end, active, duration = 1800) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    let frameId;
    let startTime;

    const tick = (now) => {
      if (startTime === undefined) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, end, duration]);

  return value;
}
