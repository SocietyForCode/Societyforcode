'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

let Lenis;

// Try to import Lenis dynamically
const loadLenis = async () => {
  try {
    const module = await import('@studio-freight/lenis');
    return module.default;
  } catch (error) {
    console.warn('Lenis not found. Smooth scrolling will be disabled.');
    return null;
  }
};

export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    let lenis;
    
    async function initLenis() {
      const LenisClass = await loadLenis();
      if (!LenisClass) return;
      
      lenis = new LenisClass({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time) {
        if (lenis) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      }

      requestAnimationFrame(raf);

      // Handle route changes
      const handleRouteChange = () => {
        window.scrollTo(0, 0);
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
      };

      // Initial scroll to top
      handleRouteChange();
    }

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
