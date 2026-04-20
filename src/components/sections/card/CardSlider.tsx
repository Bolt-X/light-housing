'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

import {
  DEVELOPMENT_CONTENT,
  DEVELOPMENT_PROJECTS,
} from '../../../constants/development';

gsap.registerPlugin(ScrollTrigger);

const projects = DEVELOPMENT_PROJECTS;

const CardSlider = (): React.ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const detailRows = [];
  for (let i = 0; i < activeProject.details.length; i += 2) {
    detailRows.push(activeProject.details.slice(i, i + 2));
  }

  useGSAP(
    () => {
      /*
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isMobile } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: isMobile ? '30% top' : 'top 20%',
            end: '+=150%',
            pin: true,
            pinSpacing: true,
            scrub: true,
            onUpdate: (self) => {
              let newIndex = Math.floor(self.progress * projects.length);
              if (newIndex >= projects.length) newIndex = projects.length - 1;
              if (newIndex < 0) newIndex = 0;

              setActiveIndex((prev) => {
                if (prev !== newIndex) return newIndex;
                return prev;
              });
            },
          });
        },
      );
      */
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      /*
      gsap.fromTo(
        '#right-panel-content',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      );
      */
    },
    { dependencies: [activeIndex], scope: containerRef },
  );

  return (
    <div ref={containerRef} id="container" className="w-full bg-[#023A5C]">
      <div className="container relative flex min-h-[640px] w-full flex-col items-center justify-center gap-12 py-10 xl:flex-row xl:gap-[60px] xl:py-[60px] 3xl:min-h-[720px] 3xl:py-[100px]">
        <img
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-full select-none object-cover lg:block"
          alt="Bg pattern"
          src="/assets/bgs/bg-pattern.png"
        />

        {/* LEFT CONTENT */}
        <div className="relative z-10 flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left xl:flex-[1_0_30%]">
          <div className="flex w-full flex-col gap-2 md:gap-3">
            <div className="section-subtitle !text-white/70 md:text-center xl:text-left">
              {DEVELOPMENT_CONTENT.subtitle}
            </div>

            <p className="section-title !text-white md:text-center xl:text-left">
              {DEVELOPMENT_CONTENT.title}
            </p>
          </div>

          <p className="max-w-md text-justify text-sm leading-relaxed text-white/80 md:max-w-none md:text-base">
            {DEVELOPMENT_CONTENT.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
          {/* MAP + PINS */}
          <div className="relative z-10 flex flex-col items-center gap-2.5 px-4 md:px-0 xl:w-[45%]">
            <div className="relative">
              <img
                className="h-[400px] w-auto object-contain md:h-[400px]"
                alt="Vietnam"
                src="/assets/bgs/vietnam-pattern.png"
              />

              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(index)}
                    className={`pin-trigger group absolute flex -translate-x-1/2 -translate-y-full cursor-pointer flex-col items-center justify-end transition-all duration-500 ease-out ${
                      isActive ? 'z-10 scale-[1.2]' : 'z-10 scale-90 opacity-80'
                    }`}
                    style={{
                      top: project.position.top,
                      left: project.position.left,
                    }}
                    title={project.name}
                  >
                    {isActive && (
                      <div className="pointer-events-none absolute flex h-8 w-8 animate-ping items-center justify-center rounded-full bg-brand opacity-30"></div>
                    )}

                    {/* CSS Map Marker */}
                    <img src="/assets/icons/map_pin.svg" alt="Map Pin" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            id="right-panel"
            className="relative z-10 flex w-full max-w-sm flex-col gap-4 self-stretch rounded-xl bg-white p-4 shadow-xl md:flex-1 lg:max-w-[500px] lg:gap-6 lg:rounded-2xl lg:p-6"
          >
            <div
              id="right-panel-content"
              className="flex flex-col gap-4 lg:gap-6"
            >
              <div className="flex flex-col gap-1">
                <div className="text-lg font-bold text-brand-dark">
                  {activeProject.name}
                </div>
                {!activeProject.isReleased && (
                  <span className="w-fit rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                    Sắp ra mắt
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4">
                {detailRows.length > 0 ? (
                  detailRows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex flex-col gap-4 border-b border-dashed border-gray-200 pb-2 lg:pb-4"
                    >
                      <div className="flex justify-between gap-4">
                        {row.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex flex-1 flex-col gap-1"
                          >
                            <div className="text-xs text-[#8384A0]">
                              {item.label}
                            </div>

                            <div
                              className={`text-sm font-semibold ${
                                item.isSuccess
                                  ? 'text-green-700'
                                  : 'text-[#2F3037]'
                              }`}
                            >
                              {item.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="min-h-[200px] py-10 text-center text-sm italic text-gray-400">
                    Thông tin dự án đang được cập nhật. Vui lòng quay lại sau.
                  </div>
                )}
              </div>

              <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg text-brand-dark transition-colors">
                <span className="text-sm font-semibold">
                  {DEVELOPMENT_CONTENT.viewDetails}
                </span>
                <img
                  src="/assets/icons/chevron_right_brand.svg"
                  alt="Chevron right"
                  className="h-4 w-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
