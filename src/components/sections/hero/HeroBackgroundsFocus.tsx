'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CommonSection } from '@/src/types/pageBuilder';
import { getAssetUrlById } from '@/src/utils/image';

export default function HeroBackgroundsFocus({ data }: CommonSection) {
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = data?.items || [];
  const buttonText = data?.buttons?.[0]?.label || 'Khám phá ngay';

  return (
    <div
      ref={containerRef}
      className="group relative h-screen w-full overflow-hidden"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const elements = activeSlide.querySelectorAll(
            '.hero-content-element',
          );
          gsap.fromTo(
            elements,
            { opacity: 0.2, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.2,
              ease: 'ease.in',
            },
          );
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide: any, index: number) => (
          <SwiperSlide className="slide" key={index}>
            <div
              className="relative flex h-full w-full items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${getAssetUrlById(slide.cover?.id)})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 mx-auto flex max-w-[468px] flex-col items-center gap-4 px-6 text-center text-white md:px-0 xl:max-w-[680px] 3xl:max-w-[864px]">
                <h1 className="hero-content-element text-lg font-bold leading-tight md:text-[26px] xl:text-[30px] 2xl:text-[36px] 4xl:text-[40px]">
                  {slide.title}
                </h1>
                <p className="hero-content-element max-w-[340px] text-xs text-white/80 md:max-w-none md:text-sm 2xl:text-base">
                  {slide.subtitle}
                </p>
                <button className="hero-content-element mt-4 rounded-full border border-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-white hover:text-brand-dark lg:px-6 lg:py-3 xl:text-base 2xl:px-7">
                  {buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button className="swiper-button-prev-custom absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/50 p-2 text-white transition-colors hover:bg-white/20 md:flex 2xl:p-3">
        <img
          className="h-5 w-5 brightness-0 invert 2xl:size-6"
          alt="prev"
          src="/assets/icons/arrow_left.svg"
        />
      </button>
      <button className="swiper-button-next-custom absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/50 p-2 text-white transition-colors hover:bg-white/20 md:flex 2xl:p-3">
        <img
          className="h-5 w-5 brightness-0 invert 2xl:size-6"
          alt="next"
          src="/assets/icons/arrow_right.svg"
        />
      </button>

      {/* Inject Swiper Bullet CSS styles directly */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .swiper-pagination {
            position: absolute;
            bottom: 40px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 10;
            display: flex;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: auto !important;
          }
          .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
            background-color: rgba(255, 255, 255, 0.4) !important;
            border-radius: 9999px !important;
            display: inline-block;
            transition: all 0.3s ease;
            cursor: pointer;
            margin: 0 !important;
            opacity: 1 !important;
          }
          @media (min-width: 1024px) {
            .swiper-pagination-bullet {
              width: 10px !important;
              height: 10px !important;
            }
          }
          .swiper-pagination-bullet-active {
            width: 32px !important;
            background-color: #ffffff !important;
          }
        `,
        }}
      />
    </div>
  );
}
