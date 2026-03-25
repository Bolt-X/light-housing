'use client';

import { cn } from '@/src/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export const FeaturedPropertiesSection = (): React.ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null);
  const features = [
    {
      id: '01',
      title: 'Quy hoạch xanh hài hòa',
      description:
        'Dự án được phát triển với không gian sống cân bằng, cảnh quan xanh và tiện ích đồng bộ, mang đến môi trường sống trong lành.',
      image: '/assets/images/feature_1.png',
      imagePosition: 'top',
    },
    {
      id: '02',
      title: 'Thiết kế tối ưu bền vững',
      description:
        'Không gian được tối ưu công năng, ánh sáng và thông gió tự nhiên, giúp nâng cao trải nghiệm sống và giá trị lâu dài.',
      image: '/assets/images/feature_2.png',
      imagePosition: 'bottom',
    },
    {
      id: '03',
      title: 'Cộng đồng sống văn minh',
      description:
        'Hướng đến cộng đồng cư dân hiện đại, gắn kết và tích cực, nơi mỗi người đều cảm thấy thoải mái và thuộc về.',
      image: '/assets/images/feature_3.png',
      imagePosition: 'top',
    },
    {
      id: '04',
      title: 'Giá trị tương lai vững bền',
      description:
        'Không chỉ đáp ứng nhu cầu an cư hiện tại, mỗi dự án còn mở ra giá trị bền vững theo thời gian.',
      image: '/assets/images/feature_4.png',
      imagePosition: 'bottom',
    },
    {
      id: '05',
      title: 'Tiên phong nhà ở quốc dân',
      description:
        'Dùng tư duy tối ưu để tạo ra những giá trị thiết thực, đặt ra một chuẩn mực mới cho chất lượng sống.',
      image: '/assets/images/feature_5.png',
      imagePosition: 'top',
    },
  ];

  useGSAP(
    () => {
      const featureItems = gsap.utils.toArray('.feature-item');

      gsap.fromTo(
        featureItems,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 10%',
            end: '+=150%',
            pin: true,
            pinSpacing: true,
            toggleActions: 'play none none none',
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="container relative flex min-h-[400px] w-full flex-col items-center py-10 md:min-h-[622px] xl:py-20"
    >
      {/* <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <img
          src="/assets/bgs/featured-props-pattern.png"
          alt="Featured Properties Background"
          className="z-0 h-full w-full object-cover"
        />
      </div> */}
      <div className="relative z-10 flex w-full flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-2 xl:gap-3">
          <div className="section-subtitle text-center">
            CÙNG LIGHT HOUSING,HÀNH TRÌNH AN CƯ TRỞ NÊN NHẸ NHÀNG VÀ VỮNG TÂM
            HƠN
          </div>

          <p className="section-title text-center text-brand-dark">
            Một khởi đầu an cư đầu tiên đang dần hiện hữu trong tầm tay.
          </p>
        </div>

        <div className="custom-scrollbar w-full overflow-x-auto overflow-y-hidden pb-6">
          <div className="mx-auto grid w-max grid-cols-5 gap-8 px-4 md:gap-10 md:px-0 xl:max-w-none xl:grid-cols-5">
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
