import { useEffect, useRef, useState, useCallback } from 'react';

// Mobile breakpoint - parallax is disabled below this width to prevent scroll shaking
const MOBILE_BREAKPOINT = 768;

interface ParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  clamp?: boolean;
  maxOffset?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = -0.2, direction = 'vertical', clamp = true, maxOffset = 150 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (window.innerWidth < MOBILE_BREAKPOINT) return;

    if (!ticking.current) {
      requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const rawOffset = (elementCenter - viewportCenter) * speed;

          let finalOffset = rawOffset;
          if (clamp) {
            finalOffset = Math.max(-maxOffset, Math.min(maxOffset, rawOffset));
          }
          setOffset(finalOffset);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [speed, clamp, maxOffset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT;

  const style: React.CSSProperties = isMobile
    ? {}
    : {
        transform: direction === 'vertical'
          ? `translateY(${offset}px)`
          : `translateX(${offset}px)`,
        willChange: 'transform',
        transition: 'transform 0.1s linear',
      };

  return { ref, style, offset };
}

// Returns scroll Y position, or 0 on mobile to disable scroll-driven transforms
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) return;

      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}
