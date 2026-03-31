'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { CommonSection } from '@/src/types/pageBuilder';
import { getAssetUrlById } from '@/src/utils/image';

export default function LogoSlider({ data }: CommonSection) {
  const originalPartners = data?.cover || [];

  const partners = [
    ...originalPartners,
    ...originalPartners,
    ...originalPartners,
  ];

  return (
    <div className="container flex w-full flex-col items-center gap-8 overflow-hidden py-10 xl:gap-[60px] xl:py-16">
      <div className="flex flex-col items-center gap-2 text-center lg:gap-4">
        <span className="section-subtitle">{data?.subtitle}</span>
        <h2 className="section-title text-center text-brand-dark">
          {data?.title}
        </h2>
      </div>

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
          {partners.map((partner: any, index: number) => (
            <SwiperSlide
              key={index}
              className="!flex items-center justify-center"
            >
              <img
                src={getAssetUrlById(partner?.directus_files_id ?? partner.id)}
                alt={partner.title}
                className="object-contain transition-all duration-300 hover:opacity-100 md:max-w-[140px] xl:max-w-40 2xl:max-w-[180px] 3xl:max-w-[206px] 4xl:max-w-[260px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
