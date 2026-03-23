export const FeaturedPropertiesSection = (): React.ReactNode => {
  const features = [
    {
      id: '01',
      title: 'Quy hoạch xanh hài hòa',
      description:
        'Dự án được phát triển với không gian sống cân bằng, cảnh quan xanh và tiện ích đồng bộ, mang đến môi trường sống trong lành.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-1@2x.png',
      imagePosition: 'top',
      badgeStyle:
        'bg-[color:var(--token-color-background-bg-primary)] border border-solid border-token-color-border-border-inverted',
      badgeTop: 'top-44',
      badgeLeft: 'left-[126px]',
      textColor: 'text-token-color-text-body-primary',
    },
    {
      id: '02',
      title: 'Thiết kế tối ưu bền vững',
      description:
        'Không gian được tối ưu công năng, ánh sáng và thông gió tự nhiên, giúp nâng cao trải nghiệm sống và giá trị lâu dài.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-2@2x.png',
      imagePosition: 'bottom',
      badgeStyle:
        'bg-[color:var(--token-color-background-bg-primary)] border border-solid border-token-color-border-border-inverted',
      badgeTop: 'top-[118px]',
      badgeLeft: 'left-[126px]',
      textColor: 'text-token-color-text-body-secondary',
    },
    {
      id: '03',
      title: 'Cộng đồng sống văn minh',
      description:
        'Hướng đến cộng đồng cư dân hiện đại, gắn kết và tích cực, nơi mỗi người đều cảm thấy thoải mái và thuộc về.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-3@2x.png',
      imagePosition: 'top',
      badgeStyle: 'bg-[color:var(--token-color-background-bg-brand-inverted)]',
      badgeTop: 'top-44',
      badgeLeft: 'left-[126px]',
      textColor: 'text-token-color-text-body-primary',
    },
    {
      id: '04',
      title: 'Giá trị tương lai vững bền',
      description:
        'Không chỉ đáp ứng nhu cầu an cư hiện tại, mỗi dự án còn mở ra giá trị bền vững theo thời gian.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-4@2x.png',
      imagePosition: 'bottom',
      badgeStyle: 'bg-[color:var(--token-color-background-bg-brand-inverted)]',
      badgeTop: 'top-[118px]',
      badgeLeft: 'left-[126px]',
      textColor: 'text-token-color-text-body-secondary',
    },
  ];

  return (
    <div
      className="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat bg-[url('https://c.animaapp.com/Bhe9g9ou/img/mask-group.png')] px-6 py-12 md:px-20 md:py-20 min-h-[400px] md:min-h-[622px]"
    >
      <div className="flex w-full flex-col items-center gap-8 md:gap-10">
        <div className="flex w-full flex-col items-center gap-2 md:gap-3">
          <div className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500 md:text-sm">
            ĐỒNG HÀNH PHÁT TRIỂN
          </div>

          <p className="max-w-2xl text-center text-xl font-bold leading-tight text-[#2C76A1] md:text-3xl">
            Bền vững từ không gian sống đến giá trị tương lai
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col items-center text-center"
            >
              {feature.imagePosition === 'top' && (
                <div className="mb-6 flex flex-col items-center w-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-48 md:w-full"
                  />
                  <div className="-mt-5 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#034675] text-sm font-bold text-white z-10">
                    {feature.id}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2 px-4 transition-transform group-hover:-translate-y-1">
                <h3 className="font-bold text-[#2C76A1] md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                  {feature.description}
                </p>
              </div>

              {feature.imagePosition === 'bottom' && (
                <div className="mt-6 flex flex-col items-center w-full">
                  <div className="-mb-5 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#034675] text-sm font-bold text-white z-10">
                    {feature.id}
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-48 md:w-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
