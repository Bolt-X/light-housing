import { cn } from '@/src/lib/utils';

export const FeaturedPropertiesSection = (): React.ReactNode => {
  const features = [
    {
      id: '01',
      title: 'Quy hoạch xanh hài hòa',
      description:
        'Dự án được phát triển với không gian sống cân bằng, cảnh quan xanh và tiện ích đồng bộ, mang đến môi trường sống trong lành.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-1@2x.png',
      imagePosition: 'top',
    },
    {
      id: '02',
      title: 'Thiết kế tối ưu bền vững',
      description:
        'Không gian được tối ưu công năng, ánh sáng và thông gió tự nhiên, giúp nâng cao trải nghiệm sống và giá trị lâu dài.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-2@2x.png',
      imagePosition: 'bottom',
    },
    {
      id: '03',
      title: 'Cộng đồng sống văn minh',
      description:
        'Hướng đến cộng đồng cư dân hiện đại, gắn kết và tích cực, nơi mỗi người đều cảm thấy thoải mái và thuộc về.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-3@2x.png',
      imagePosition: 'top',
    },
    {
      id: '04',
      title: 'Giá trị tương lai vững bền',
      description:
        'Không chỉ đáp ứng nhu cầu an cư hiện tại, mỗi dự án còn mở ra giá trị bền vững theo thời gian.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-4@2x.png',
      imagePosition: 'bottom',
    },
  ];

  return (
    <div className="container relative flex min-h-[400px] w-full flex-col items-center py-10 md:min-h-[622px] xl:py-20">
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <img
          src="/assets/bgs/featured-props-pattern.png"
          alt="Featured Properties Background"
          className="z-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-2 xl:gap-3">
          <div className="section-subtitle text-center">
            ĐỒNG HÀNH PHÁT TRIỂN
          </div>

          <p className="section-title text-brand-dark text-center">
            Bền vững từ không gian sống đến giá trị tương lai
          </p>
        </div>

        <div className="custom-scrollbar w-full overflow-x-auto pb-6">
          <div className="mx-auto grid w-max grid-cols-4 gap-8 px-4 md:w-full md:max-w-[600px] md:grid-cols-2 md:gap-10 md:px-0 xl:max-w-none xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  'group mx-auto flex w-[280px] flex-col items-center justify-center text-center md:w-[260px] lg:w-auto',
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
                  <h3 className="text-brand-dark font-bold md:text-lg">
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
