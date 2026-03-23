const newsItems = [
  {
    image: 'https://c.animaapp.com/Bhe9g9ou/img/image-9@2x.png',
    category: 'Quy hoạch',
    title: 'Chính sách mới về nhà ở xã hội',
    description:
      'Nhà ở xã hội thường có giá thấp hơn so với các loại nhà ở khác, chính sách hỗ trợ mua nhà ở xã hội là phương án giúp người dân sớm có nhà nhưng phải đáp ứng những điều kiện và phải có giấy tờ chứng minh.',
  },
  {
    image: 'https://c.animaapp.com/Bhe9g9ou/img/image-10@2x.png',
    category: 'Phát triển kinh tế',
    title: 'Xu hướng căn hộ giá hợp lý tại đô thị lớn',
    description:
      'Nhà ở xã hội thường có giá thấp hơn so với các loại nhà ở khác, chính sách hỗ trợ mua nhà ở xã hội là phương án giúp người dân sớm có nhà nhưng phải đáp ứng những điều kiện và phải có giấy tờ chứng minh.',
  },
  {
    image: 'https://c.animaapp.com/Bhe9g9ou/img/image-11@2x.png',
    category: 'Tin tức dự án',
    title: 'Người trẻ nên mua nhà hay thuê nhà?',
    description:
      'Nhà ở xã hội thường có giá thấp hơn so với các loại nhà ở khác, chính sách hỗ trợ mua nhà ở xã hội là phương án giúp người dân sớm có nhà nhưng phải đáp ứng những điều kiện và phải có giấy tờ chứng minh.',
  },
  {
    image: 'https://c.animaapp.com/Bhe9g9ou/img/image-12@2x.png',
    category: 'Hạ tầng giao thông',
    title: 'Thị trường bất động sản năm 2025 có gì thay đổi?',
    description:
      'Nhà ở xã hội thường có giá thấp hơn so với các loại nhà ở khác, chính sách hỗ trợ mua nhà ở xã hội là phương án giúp người dân sớm có nhà nhưng phải đáp ứng những điều kiện và phải có giấy tờ chứng minh.',
  },
];

export const PropertyHighlightsSection = (): React.ReactNode => {
  return (
    <div className="container relative flex w-full flex-col items-center gap-6 bg-white/5 py-10 xl:gap-[60px] xl:py-16">
      <img
        className="pointer-events-none absolute right-0 top-0 h-full w-full select-none object-cover opacity-60"
        alt="Bg pattern 2"
        src="/assets/bgs/bg-pattern-2.png"
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-3">
        <div className="section-subtitle !text-[#2F3037]">
          TIN TỨC THỊ TRƯỜNG
        </div>

        <p className="section-title text-brand-dark text-center">
          Thông tin mới nhất về thị trường bất động sản
        </p>
      </div>

      <div className="relative z-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 xl:gap-10">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="aspect-[3/2] w-full overflow-hidden rounded-md bg-cover bg-center transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="bg-brand-50 rounded-[4px] px-2 py-1 text-xs font-medium text-white">
                  {item.category}
                </div>
              </div>

              <h4 className="group-hover:text-brand line-clamp-2 text-base font-bold text-[#2F3037] transition-colors lg:text-lg">
                {item.title}
              </h4>

              <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="border-brand-dark text-brand-dark hover:bg-brand-dark z-10 inline-flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-colors hover:text-white xl:px-7 xl:py-3 xl:text-base">
        XEM THÊM TIN TỨC
      </button>
    </div>
  );
};
