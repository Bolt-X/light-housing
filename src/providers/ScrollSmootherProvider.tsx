'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { createContext, useContext, useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

type ScrollSmootherContextType = {
  lenis: Lenis | null;
};

const ScrollSmootherContext = createContext<ScrollSmootherContextType>({
  lenis: null,
});

export const useScrollSmoother = () => useContext(ScrollSmootherContext);

export function ScrollSmootherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.5,
      lerp: 0.08,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    // Update ScrollTrigger on Lenis scroll
    lenisInstance.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Handle hash link scrolling smoothly
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      const href = anchor?.getAttribute('href');

      if (href?.startsWith('#') && href.length > 1) {
        e.preventDefault();
        lenisInstance.scrollTo(href);
      }
    };

    document.addEventListener('click', handleHashClick);

    // Refresh ScrollTrigger when page height changes
    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    observer.observe(document.body);

    // Connect Lenis to GSAP ticker
    function update(time: number) {
      lenisInstance.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(update);
      document.removeEventListener('click', handleHashClick);
      observer.disconnect();
      setLenis(null);
    };
  }, []);

  return (
    <ScrollSmootherContext.Provider value={{ lenis }}>
      {children}
    </ScrollSmootherContext.Provider>
  );
}
