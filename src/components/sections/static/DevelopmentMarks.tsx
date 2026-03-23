'use client';

import { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Light Housing Huế',
    position: { top: '40%', left: '54%' },
    details: [
      { label: 'Vị trí', value: 'Bàu Vá Huế', isSuccess: false },
      { label: 'Diện tích ô đất', value: '8652 m2', isSuccess: false },
      { label: 'Mật độ xây dựng', value: '40%', isSuccess: false },
      { label: 'Loại dự án', value: 'Nhà ở quốc dân', isSuccess: false },
      {
        label: 'Tình trạng bất động sản',
        value: 'Đã thi công phần móng',
        isSuccess: true,
      },
      { label: 'Số tầng', value: '12', isSuccess: false },
      { label: 'Số căn', value: '462', isSuccess: false },
      { label: 'Diện tích hầm', value: '5138 m2', isSuccess: false },
    ],
  },
  {
    id: 2,
    name: 'Light Housing TP. Hồ Chí Minh',
    position: { top: '68%', left: '40%' },
    details: [
      { label: 'Vị trí', value: 'Đông Hà, TP. Hồ Chí Minh ', isSuccess: false },
      { label: 'Diện tích ô đất', value: '6400 m2', isSuccess: false },
      { label: 'Mật độ xây dựng', value: '42%', isSuccess: false },
      { label: 'Loại dự án', value: 'Khu dân cư', isSuccess: false },
      {
        label: 'Tình trạng bất động sản',
        value: 'Đang triển khai',
        isSuccess: true,
      },
      { label: 'Số tầng', value: '10', isSuccess: false },
      { label: 'Số căn', value: '320', isSuccess: false },
      { label: 'Diện tích hầm', value: '4000 m2', isSuccess: false },
    ],
  },
  {
    id: 3,
    name: 'Light Housing Nha Trang',
    position: { top: '55%', left: '62%' },
    details: [
      { label: 'Vị trí', value: 'Nha Trang', isSuccess: false },
      { label: 'Diện tích ô đất', value: '10000 m2', isSuccess: false },
      { label: 'Mật độ xây dựng', value: '35%', isSuccess: false },
      { label: 'Loại dự án', value: 'Nhà ở thương mại', isSuccess: false },
      {
        label: 'Tình trạng bất động sản',
        value: 'Chuẩn bị thi công',
        isSuccess: true,
      },
      { label: 'Số tầng', value: '25', isSuccess: false },
      { label: 'Số căn', value: '800', isSuccess: false },
      { label: 'Diện tích hầm', value: '8000 m2', isSuccess: false },
    ],
  },
  {
    id: 4,
    name: 'Light Housing Hải Phòng',
    position: { top: '18%', left: '35%' },
    details: [
      { label: 'Vị trí', value: 'Hải Phòng', isSuccess: false },
      { label: 'Diện tích ô đất', value: '15000 m2', isSuccess: false },
      { label: 'Mật độ xây dựng', value: '35%', isSuccess: false },
      { label: 'Loại dự án', value: 'Khu đô thị phức hợp', isSuccess: false },
      {
        label: 'Tình trạng bất động sản',
        value: 'Sắp ra mắt',
        isSuccess: true,
      },
      { label: 'Số tầng', value: '25', isSuccess: false },
      { label: 'Số căn', value: '1200', isSuccess: false },
      { label: 'Diện tích hầm', value: '10000 m2', isSuccess: false },
    ],
  },
];

export const DevelopmentMarks = (): React.ReactNode => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  // Chunk details into rows of 2 for the UI
  const detailRows = [];
  for (let i = 0; i < activeProject.details.length; i += 2) {
    detailRows.push(activeProject.details.slice(i, i + 2));
  }

  return (
    <div className="container relative flex w-full flex-col items-center justify-center gap-12 bg-[#023A5C] py-10 xl:flex-row xl:gap-[60px] xl:py-[60px] 3xl:py-[100px]">
      <img
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-full select-none object-cover lg:block"
        alt="Bg pattern"
        src="/assets/bgs/bg-pattern.png"
      />

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left xl:flex-[1_0_30%]">
        <div className="flex w-full flex-col gap-2 md:gap-3">
          <div className="section-subtitle !text-white/70 md:text-center xl:text-left">
            DẤU ẤN PHÁT TRIỂN
          </div>

          <p className="section-title !text-white md:text-center xl:text-left">
            Hành trình kiến tạo <br className="block md:hidden" /> trải dài khắp
            Việt Nam
          </p>
        </div>

        <p className="max-w-md text-justify text-sm leading-relaxed text-white/80 md:max-w-none md:text-base">
          Từng bước mở rộng mạng lưới trên các đô thị giàu tiềm năng, chúng tôi
          hiện phát triển 2 dự án tại Huế, 1 dự án tại Quảng Trị, 1 dự án tại
          Nha Trang và 1 dự án tại Hải Phòng sắp ra mắt. Mỗi điểm chấm trên bản
          đồ không chỉ đại diện cho một dự án, mà còn là dấu mốc cho hành trình
          kiến tạo những không gian sống chất lượng, phù hợp với nhu cầu an cư
          thực tế và định hướng phát triển bền vững tại nhiều khu vực trên cả
          nước.
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
        {/* MAP + PINS */}
        <div className="relative z-10 flex flex-col items-center gap-2.5 px-4 md:px-0 xl:w-[45%]">
          <div className="relative">
            <img
              className="h-[400px] w-auto object-contain md:h-[400px]"
              alt="Vietnam"
              src="/assets/bgs/vietnam-pattern.png"
            />

            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group absolute flex -translate-x-1/2 -translate-y-full cursor-pointer flex-col items-center justify-end transition-all duration-300 ${
                    isActive ? 'z-10 scale-[1.2]' : 'z-10 scale-90 opacity-80'
                  }`}
                  style={{
                    top: project.position.top,
                    left: project.position.left,
                  }}
                  title={project.name}
                >
                  {isActive && (
                    <div className="bg-brand absolute flex h-8 w-8 animate-ping items-center justify-center rounded-full opacity-30"></div>
                  )}

                  {/* CSS Map Marker */}
                  <img src="/assets/icons/map_pin.svg" alt="Map Pin" />
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative z-10 flex w-full max-w-sm flex-col gap-4 rounded-xl bg-white p-4 shadow-xl md:flex-1 lg:max-w-[500px] lg:gap-6 lg:rounded-2xl lg:p-6">
          <div className="text-brand-dark text-lg font-bold">
            {activeProject.name}
          </div>

          <div className="flex flex-col gap-4">
            {detailRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col gap-4 border-b border-dashed border-gray-200 pb-2 lg:pb-4"
              >
                <div className="flex justify-between gap-4">
                  {row.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-1 flex-col gap-1">
                      <div className="text-xs text-[#8384A0]">{item.label}</div>

                      <div
                        className={`text-sm font-semibold ${
                          item.isSuccess ? 'text-green-700' : 'text-[#2F3037]'
                        }`}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-brand-dark flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors">
            <span className="text-sm font-semibold">Xem chi tiết</span>
            <img
              src="/assets/icons/chevron_right_brand.svg"
              alt="Chevron right"
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
