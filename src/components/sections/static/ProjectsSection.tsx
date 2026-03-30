'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

import {
  PROJECT_TYPE,
  PROJECTS_CONTENT,
  PROJECTS_DATA,
} from '../../../constants/projects';
import { cn } from '@/src/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = (): React.ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = PROJECTS_DATA;

  useGSAP(
    () => {
      /*
      const projectItems = gsap.utils.toArray('.project-item');
      projectItems.forEach((item: any) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
          },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'bottom 50%',
              scrub: 1,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          },
        );
      });
      */
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-center gap-10 py-10 xl:gap-[60px] xl:py-16 2xl:py-[100px]"
    >
      <div className="container flex w-full flex-col items-center gap-4 md:gap-10">
        <div className="flex w-full flex-col items-center gap-2 xl:gap-3">
          <p className="section-subtitle">{PROJECTS_CONTENT.subtitle}</p>

          <p className="section-title text-center text-brand-dark">
            {PROJECTS_CONTENT.title}
          </p>
        </div>
      </div>

      <div className="container flex w-full flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-item flex w-full flex-col items-stretch transition-all md:h-[420px] md:flex-row lg:h-[480px] xl:h-[560px] 2xl:h-[640px] ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <ImageBlock image={project.image} />
            <ContentBlock
              year={project.year}
              title={project.title}
              description={project.description}
              type={project?.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ContentBlock = ({
  year,
  title,
  description,
  type,
}: {
  year: string;
  title: string;
  description: string;
  type?: string;
}) => {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-4 py-12 md:gap-7 md:px-10 md:py-0 3xl:px-24">
      {/* <div className="relative hidden h-10 w-[3px] bg-brand-50 xl:block" /> */}

      <div className="relative flex w-full flex-col items-center gap-2 xl:gap-3">
        <div className="text-sm font-normal text-brand-dark xl:text-base">
          {year}
        </div>

        <Link
          href={'#'}
          className="group relative flex items-center justify-center text-brand-500 transition-all hover:text-brand-500/80"
        >
          <span className="text-center text-lg font-bold leading-tight transition-all duration-300 group-hover:underline lg:text-[22px] 2xl:text-[26px]">
            {title}
          </span>
          <ChevronRight className="absolute -right-6 size-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:-right-8 lg:size-6 2xl:size-7" />
        </Link>
        {type && (
          <div
            className={cn(
              'mx-auto w-fit rounded-full px-3 py-1 text-sm',
              type === PROJECT_TYPE.COMMERCIAL
                ? 'bg-brand-400/50 text-white'
                : 'bg-success-400/50 text-white',
            )}
          >
            {type}
          </div>
        )}
      </div>

      <div className="relative flex w-full flex-col items-center gap-6">
        <p className="text-center text-sm leading-relaxed text-[#5F5F74] lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const ImageBlock = ({ image }: { image: string }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -20 },
          {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-[300px] w-full overflow-hidden md:min-h-0 md:w-1/2"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 -top-[15%] h-[130%] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};
