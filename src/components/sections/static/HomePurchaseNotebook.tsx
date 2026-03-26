'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

import { NOTEBOOK_CONTENT, NOTEBOOK_STEPS } from '../../../constants/notebook';

gsap.registerPlugin(ScrollTrigger);

const steps = NOTEBOOK_STEPS;

const HomePurchaseNotebook = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  // Auto-scroll to active step on mobile
  useEffect(() => {
    if (activeStep < 1) return;
    const scroller = scrollerRef.current;
    const stepEl = stepRefs.current[activeStep - 1];
    if (!scroller || !stepEl) return;

    // Only scroll on mobile (container is horizontally scrollable)
    if (window.innerWidth >= 1024) return;

    const stepCenter = stepEl.offsetLeft + stepEl.offsetWidth / 2;
    const scrollTarget = stepCenter - scroller.clientWidth / 2;
    scroller.scrollTo({ left: scrollTarget, behavior: 'smooth' });
  }, [activeStep]);

  useGSAP(
    () => {
      const totalSteps = steps.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%',
          end: `+=${totalSteps * 400}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,

          snap: {
            snapTo: 1 / (totalSteps - 1),
            duration: 0.2,
            ease: 'power1.inOut',
          },

          onUpdate: (self) => {
            const step = Math.round(self.progress * (totalSteps - 1)) + 1;
            setActiveStep(step);
          },
        },
      });

      // animate line
      tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: 'none' });

      // header animation
      gsap.fromTo(
        '.hpn-header',
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[500px] w-full overflow-hidden 3xl:min-h-[700px]"
    >
      <img
        src="/assets/bgs/bg-pattern-3.png"
        alt="home-purchase-notebook"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent" />

      <div className="container relative z-10 py-12 text-center xl:py-16">
        {/* Header */}
        <div className="hpn-header space-y-3 2xl:space-y-4">
          <div className="section-subtitle text-[#2F3037]">
            {NOTEBOOK_CONTENT.subtitle}
          </div>
          <div className="section-title text-brand-dark">
            {NOTEBOOK_CONTENT.title}
          </div>
        </div>

        {/* Stepper – horizontally scrollable on mobile, fixed on desktop */}
        <div
          ref={scrollerRef}
          className="relative mt-10 w-full overflow-x-auto overflow-y-visible pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="relative mx-auto min-w-[640px] lg:min-w-0 lg:max-w-[1000px]">
            {/* ── Row 1: "Bước" labels ── */}
            <div className="grid grid-cols-5">
              {steps.map((step, index) => {
                const isActive = step.id <= activeStep;
                return (
                  <div key={step.id} className="flex justify-center">
                    <p
                      className={`text-sm font-normal transition-colors duration-300 xl:text-base ${
                        isActive
                          ? 'text-brand-primary font-medium'
                          : 'text-brand-50'
                      }`}
                    >
                      Bước
                    </p>
                  </div>
                );
              })}
            </div>

            {/* ── Row 2: Circles + connecting line ── */}
            <div className="relative mt-2 grid grid-cols-5">
              {/* Track line — spans from center of col-1 to center of col-5 */}
              <div className="pointer-events-none absolute inset-0 flex items-center px-[10%]">
                {/* dashed background track */}
                <div
                  className="h-[2px] w-full"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(to right, #BDD8EE 0px, #BDD8EE 8px, transparent 8px, transparent 16px)',
                  }}
                />
                {/* animated progress fill */}
                <div
                  ref={lineRef}
                  className="absolute inset-y-0 left-[10%] right-[10%] top-1/2 h-[2px] origin-left -translate-y-1/2 bg-brand-50"
                />
              </div>

              {/* Step circles */}
              {steps.map((step, index) => {
                const isActive = step.id <= activeStep;
                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="relative z-10 flex justify-center py-2"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* outer ring */}
                      <div
                        className={`absolute h-14 w-14 rounded-full border transition-all duration-500 xl:h-16 xl:w-16 ${
                          isActive
                            ? 'border-brand-primary/40 scale-110'
                            : 'scale-100 border-brand-50/60'
                        }`}
                      />
                      {/* inner circle */}
                      <div
                        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-base font-bold transition-all duration-500 xl:h-14 xl:w-14 xl:text-lg ${
                          isActive
                            ? 'shadow-brand-primary/30 bg-brand-500 text-white shadow-lg'
                            : 'bg-brand-50/70 text-white'
                        }`}
                      >
                        {step.id}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Row 3: Step titles ── */}
            <div className="mt-3 grid grid-cols-5">
              {steps.map((step) => {
                const isActive = step.id <= activeStep;
                return (
                  <div key={step.id} className="flex justify-center">
                    <div
                      className={`px-2 text-center text-sm font-normal leading-snug transition-colors duration-300 xl:text-base 2xl:text-lg ${
                        isActive
                          ? 'font-semibold text-brand-dark'
                          : 'text-[#2F3037]'
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePurchaseNotebook;
