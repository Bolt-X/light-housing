'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { CommonSection } from '@/src/types/pageBuilder';
import { getAssetUrlById } from '@/src/utils/image';

gsap.registerPlugin(ScrollTrigger);

export default function InfoBasic({ data }: CommonSection) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLImageElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
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
      <div className="container relative flex flex-1 flex-col justify-center gap-6 py-10 md:w-1/2 md:flex-none">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={patternRef}
            src="/assets/bgs/bg-pattern.png"
            alt="bg pattern"
            className="pointer-events-none absolute inset-0 -top-[20%] h-[140%] w-full object-cover opacity-100"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-2 bg-transparent xl:gap-4">
          <span className="section-subtitle">{data?.subtitle}</span>

          <h2 className="section-title text-brand-dark">{data?.title}</h2>
        </div>

        <div className="relative z-10 text-sm leading-relaxed text-[#5F5F74] md:max-w-[800px] xl:text-base 3xl:mt-6">
          <div dangerouslySetInnerHTML={{ __html: data?.blurb }} />
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden md:w-1/2 md:flex-none">
        <img
          ref={imageRef}
          src={getAssetUrlById(data?.cover.id)}
          alt="image"
          className="h-full max-h-[280px] w-full object-cover md:h-[280px] md:max-h-none lg:h-[400px] xl:h-[460px] 3xl:h-[520px]"
        />
      </div>
    </div>
  );
}
