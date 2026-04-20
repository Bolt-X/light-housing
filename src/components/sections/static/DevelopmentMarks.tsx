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

export const DevelopmentMarks = (): React.ReactNode => {
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
    <div
      ref={containerRef}
      id="container"
      className="w-full bg-[#023A5C]"
    ></div>
  );
};
