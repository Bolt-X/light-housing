'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { PARTNER_CONTENT, PARTNER_DATA } from '../../../constants/partners';

export const PartnerSection = (): React.ReactNode => {
  const originalPartners = PARTNER_DATA;

  /* Duplicate the array to ensure flawless infinite looping when rendering 6 slides per view */
  const partners = [
    ...originalPartners,
    ...originalPartners,
    ...originalPartners,
  ];

  return (
    <div className="container flex w-full flex-col items-center gap-8 overflow-hidden py-10 xl:gap-[60px] xl:py-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center lg:gap-4">
        <span className="section-subtitle">{PARTNER_CONTENT.subtitle}</span>

        <h2 className="section-title text-center text-brand-dark">
          {PARTNER_CONTENT.title}
        </h2>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          className="flex w-full items-center justify-center py-4"
        >
          {partners.map((partner, index) => (
            <SwiperSlide
              key={index}
              className="!flex items-center justify-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="object-contain transition-all duration-300 hover:opacity-100 md:max-w-[140px] xl:max-w-40 2xl:max-w-[180px] 3xl:max-w-[206px] 4xl:max-w-[260px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
