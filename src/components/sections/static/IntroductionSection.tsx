'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import {
  INTRODUCTION_CONTENT,
  INTRODUCTION_ASSETS,
} from '../../../constants/introduction';

gsap.registerPlugin(ScrollTrigger);

export const IntroductionSection = (): React.ReactNode => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLImageElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      // Parallax effect for the background pattern
      if (patternRef.current) {
        gsap.to(patternRef.current, {
          y: '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Optional: Subtle parallax for the main image to make it look premium
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.1, y: -60 },
          {
            y: 60,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="relative flex w-full flex-col overflow-hidden md:flex-row"
    >
      {/* Left content */}
      <div className="container relative flex flex-1 flex-col justify-center gap-6 py-10 md:w-1/2 md:flex-none">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={patternRef}
            src={INTRODUCTION_ASSETS.pattern}
            alt="bg pattern"
            className="pointer-events-none absolute inset-0 -top-[20%] h-[140%] w-full object-cover opacity-100"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-2 bg-transparent xl:gap-4">
          <span className="section-subtitle">
            {INTRODUCTION_CONTENT.subtitle}
          </span>

          <h2 className="section-title text-brand-dark">
            {INTRODUCTION_CONTENT.title}
          </h2>
        </div>

        <div className="relative z-10 text-sm leading-relaxed text-[#5F5F74] md:max-w-[800px] xl:text-base 3xl:mt-6">
          <p>{INTRODUCTION_CONTENT.description1}</p>
          <br />
          <p>{INTRODUCTION_CONTENT.description2}</p>
        </div>
      </div>

      {/* Right image */}
      <div className="relative flex-1 overflow-hidden md:w-1/2 md:flex-none">
        <img
          ref={imageRef}
          src={INTRODUCTION_ASSETS.image}
          alt="image"
          className="h-full max-h-[280px] w-full object-cover md:h-[280px] md:max-h-none lg:h-[400px] xl:h-[460px] 3xl:h-[520px]"
        />
      </div>
    </div>
  );
};
