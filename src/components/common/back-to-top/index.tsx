'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import NextImg from '../next-img';
import { cn } from '@/src/lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 1.2,
      ease: 'power3.out',
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleScrollToTop}
      className={cn(
        'group fixed bottom-8 right-8 z-[90] flex size-14 items-center justify-center rounded-full border border-white/20 bg-[#0d4a4a] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-20 opacity-0',
      )}
    >
      <div className="relative size-6 transition-transform group-hover:-translate-y-1">
        <NextImg
          src="/assets/icons/arrow_down_white.svg"
          alt="arrow up"
          className="rotate-180"
        />
      </div>

      {/* Decorative hover circle */}
      <div className="absolute inset-0 scale-110 rounded-full border border-white/40 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
    </button>
  );
}
