'use client';

import { cn } from '@/src/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

import {
  FEATURED_PROPERTIES,
  FEATURED_PROPERTIES_CONTENT,
} from '../../../constants/featuredProperties';

export const FeaturedPropertiesSection = (): React.ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null);
  const features = FEATURED_PROPERTIES;

  // useGSAP(
  //   () => {
  //     const featureItems = gsap.utils.toArray('.feature-item');

  //     gsap.fromTo(
  //       featureItems,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         stagger: 0.2,
  //         ease: 'power2.out',
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: 'top 10%',
  //           end: '+=150%',
  //           pin: true,
  //           pinSpacing: true,
  //           toggleActions: 'play none none none',
  //           scrub: 1,
  //         },
  //       },
  //     );
  //   },
  //   { scope: containerRef },
  // );

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[400px] w-full flex-col items-center py-10 md:min-h-[622px] xl:py-20"
    >
      {/* <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <img
          src="/assets/bgs/featured-props-pattern.png"
          alt="Featured Properties Background"
          className="z-0 h-full w-full object-cover"
        />
      </div> */}
      <div className="relative z-10 flex w-full flex-col items-center gap-10">
        <div className="container flex w-full flex-col items-center gap-2 xl:gap-3">
          <div className="section-subtitle text-center">
            {FEATURED_PROPERTIES_CONTENT.subtitle}
          </div>

          <p className="section-title text-center text-brand-dark">
            {FEATURED_PROPERTIES_CONTENT.title}
          </p>
        </div>

        <div className="custom-scrollbar w-full overflow-x-auto overflow-y-hidden pb-6">
          <div className="mx-auto grid w-max grid-cols-5 gap-8 px-4 md:gap-10 md:px-10 xl:max-w-none xl:grid-cols-5">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  'feature-item group mx-auto flex w-[192px] flex-col items-center justify-center text-center 2xl:w-[224px] 3xl:w-[256px] 4xl:w-[300px]',
                  feature.imagePosition === 'top'
                    ? 'items-end justify-end'
                    : 'items-start justify-start',
                )}
              >
                {feature.imagePosition === 'top' && (
                  <div className="mb-6 flex w-full flex-col items-center">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full"
                    />
                    <div className="z-10 -mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#034675] text-sm font-bold text-white">
                      {feature.id}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-2 transition-transform group-hover:-translate-y-1">
                  <h3 className="font-bold text-brand-dark 2xl:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>

                {feature.imagePosition === 'bottom' && (
                  <div className="mt-6 flex w-full flex-col items-center">
                    <div className="z-10 -mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#034675] text-sm font-bold text-white">
                      {feature.id}
                    </div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
