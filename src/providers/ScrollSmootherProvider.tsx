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

    // Connect Lenis to GSAP ticker
    function update(time: number) {
      lenisInstance.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(update);
      setLenis(null);
    };
  }, []);

  return (
    <ScrollSmootherContext.Provider value={{ lenis }}>
      {children}
    </ScrollSmootherContext.Provider>
  );
}
