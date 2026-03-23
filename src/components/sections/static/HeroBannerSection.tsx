'use client';
import { useState } from 'react';

const slides = [
  {
    id: 0,
    bg: 'https://c.animaapp.com/Bhe9g9ou/img/banner.png',
    title: 'An cư bền vững – Khởi sinh giá trị sống',
    description:
      'Những dự án bất động sản giá hợp lý, pháp lý minh bạch và chính sách linh hoạt giúp bạn sở hữu ngôi nhà đầu tiên sớm hơn bạn nghĩ.',
  },
  {
    id: 1,
    bg: 'https://c.animaapp.com/Bhe9g9ou/img/banner.png',
    title: 'Kiến tạo cộng đồng đa tiện ích',
    description:
      'Tận hưởng phong cách sống hiện đại với chuỗi tiện ích đẳng cấp ngay thềm nhà: công viên sinh thái, hồ điều hòa và trung tâm thương mại sầm uất.',
  },
  {
    id: 2,
    bg: 'https://c.animaapp.com/Bhe9g9ou/img/banner.png',
    title: 'Chuẩn mực không gian sống xanh',
    description:
      'Định hình tương lai an cư mới với phong cách thiết kế mở, mang lại sự bình yên và thư thái trọn vẹn giữa nhịp sống năng động của đô thị.',
  },
];

export const HeroBannerSection = (): React.ReactNode => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[activeIndex];

  return (
    <div
      className="relative h-[560px] w-full bg-cover bg-center md:h-[700px]"
      style={{
        backgroundImage: `url(${currentSlide.bg})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Controls + Content */}
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-6 md:px-8">
        {/* Prev */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="hidden rounded-full border p-3 opacity-50 md:flex"
        >
          <img
            className="h-6 w-6"
            alt="prev"
            src="https://c.animaapp.com/Bhe9g9ou/img/outline---arrows---alt-arrow-left.svg"
          />
        </button>

        {/* Content */}
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center text-white md:gap-6">
          <h1 className="text-2xl font-bold leading-tight md:text-5xl">
            {currentSlide.title}
          </h1>

          <p className="max-w-[340px] text-sm md:max-w-none md:text-lg">
            {currentSlide.description}
          </p>

          <button className="rounded-full border border-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black md:px-8 md:py-4 md:text-base">
            Nhận tư vấn ngay
          </button>
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="hidden rounded-full border p-3 opacity-50 md:flex"
        >
          <img
            className="h-6 w-6"
            alt="next"
            src="https://c.animaapp.com/Bhe9g9ou/img/outline---arrows---alt-arrow-right.svg"
          />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === activeIndex ? 'w-8 bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
