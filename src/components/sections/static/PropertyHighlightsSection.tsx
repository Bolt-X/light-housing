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
    <div className="relative flex w-full flex-col items-center gap-10 bg-white/5 p-6 py-16 md:gap-[60px] md:p-20">
      <img
        className="pointer-events-none absolute right-0 top-0 h-full w-full select-none object-cover opacity-30"
        alt="Bg pattern"
        src="https://c.animaapp.com/Bhe9g9ou/img/bg-pattern-2.svg"
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 md:text-sm">
          TIN TỨC THỊ TRƯỜNG
        </div>

        <p className="max-w-2xl text-center text-xl font-bold leading-tight text-brand md:text-3xl lg:text-4xl">
          Thông tin mới nhất về thị trường bất động sản
        </p>
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 overflow-hidden"
          >
            <div
              className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-cover bg-center transition-transform group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="rounded-md bg-brand-light/20 px-3 py-1 text-[10px] font-bold text-brand uppercase">
                  {item.category}
                </div>
                {/* dummy tag for design parity */}
                <div className="rounded-md bg-brand-dark px-3 py-1 text-[10px] font-bold text-white uppercase">
                  Huế
                </div>
              </div>

              <h4 className="line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-brand transition-colors">
                {item.title}
              </h4>

              <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="z-10 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand px-10 py-3 transition-colors hover:bg-brand hover:text-white">
        <span className="text-xs font-bold text-brand group-hover:text-white">
          XEM THÊM TIN TỨC
        </span>
      </button>
    </div>
  );
};
