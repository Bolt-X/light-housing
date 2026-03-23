import { JSX } from 'react';

const projectDetails = [
  {
    label: 'Vị trí',
    value: 'Bàu Vá Huế',
    isSuccess: false,
  },
  {
    label: 'Diện tích ô đất',
    value: '8652 m2',
    isSuccess: false,
  },
  {
    label: 'Mật độ xây dựng',
    value: '40%',
    isSuccess: false,
  },
  {
    label: 'Loại dự án',
    value: 'Nhà ở quốc dân',
    isSuccess: false,
  },
  {
    label: 'Tình trạng bất động sản',
    value: 'Đã thi công phần móng',
    isSuccess: true,
  },
  {
    label: 'Số tầng',
    value: '12',
    isSuccess: false,
  },
  {
    label: 'Số căn',
    value: '462',
    isSuccess: false,
  },
  {
    label: 'Diện tích hầm',
    value: '5138 m2',
    isSuccess: false,
  },
];

const detailRows = [
  [projectDetails[0], projectDetails[1]],
  [projectDetails[2], projectDetails[3]],
  [projectDetails[4], projectDetails[5]],
  [projectDetails[6], projectDetails[7]],
];

const pins = [
  {
    top: '38px',
    left: '186px',
    width: '26px',
    height: '32px',
    shadowClass: 'rounded-[4.33px/1.54px]',
    pinSrc: 'https://c.animaapp.com/Bhe9g9ou/img/pin-3.svg',
    circleSrc: 'https://c.animaapp.com/Bhe9g9ou/img/circle-3.svg',
    buildingSrc:
      'https://c.animaapp.com/Bhe9g9ou/img/bold---building--infrastructure---buildings-3.svg',
    buildingClass:
      'w-[73.08%] top-[calc(50.00%_-_9px)] left-[26.92%] h-3 absolute aspect-[1]',
  },
  {
    top: '129px',
    left: '240px',
    width: '44px',
    height: '54px',
    shadowClass: 'rounded-[7.33px/2.6px]',
    pinSrc: 'https://c.animaapp.com/Bhe9g9ou/img/pin-1.svg',
    circleSrc: 'https://c.animaapp.com/Bhe9g9ou/img/circle-1.svg',
    buildingSrc:
      'https://c.animaapp.com/Bhe9g9ou/img/bold---building--infrastructure---buildings-1.svg',
    buildingClass:
      'h-[78.12%] top-[21.88%] left-[calc(50.00%_-_10px)] w-[21px] absolute aspect-[1]',
  },
  {
    top: '244px',
    left: '298px',
    width: '26px',
    height: '32px',
    shadowClass: 'rounded-[4.33px/1.54px]',
    pinSrc: 'https://c.animaapp.com/Bhe9g9ou/img/pin-3.svg',
    circleSrc: 'https://c.animaapp.com/Bhe9g9ou/img/circle-3.svg',
    buildingSrc:
      'https://c.animaapp.com/Bhe9g9ou/img/bold---building--infrastructure---buildings-3.svg',
    buildingClass:
      'absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_6px)] w-3 h-3 aspect-[1]',
  },
  {
    top: '312px',
    left: '186px',
    width: '26px',
    height: '32px',
    shadowClass: 'rounded-[4.33px/1.54px]',
    pinSrc: 'https://c.animaapp.com/Bhe9g9ou/img/pin-3.svg',
    circleSrc: 'https://c.animaapp.com/Bhe9g9ou/img/circle-3.svg',
    buildingSrc:
      'https://c.animaapp.com/Bhe9g9ou/img/bold---building--infrastructure---buildings-3.svg',
    buildingClass:
      'absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_6px)] w-3 h-3 aspect-[1]',
  },
];

export const DevelopmentMarks = (): React.ReactNode => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-12 bg-brand-dark px-6 py-16 md:flex-row md:gap-[60px] md:px-20 md:py-[100px]">
      <img
        className="pointer-events-none absolute right-0 top-0 h-full w-full select-none object-cover opacity-20"
        alt="Bg pattern"
        src="https://c.animaapp.com/Bhe9g9ou/img/bg-pattern-1.svg"
      />

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left">
        <div className="flex w-full flex-col gap-2 md:gap-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-white/70 md:text-sm">
            DẤU ẤN PHÁT TRIỂN
          </div>

          <p className="text-xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
            Hành trình kiến tạo trải dài khắp Việt Nam
          </p>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-white/80 md:text-base">
          Từng bước mở rộng mạng lưới trên các đô thị giàu tiềm năng, chúng tôi
          hiện phát triển 2 dự án tại Huế, 1 dự án tại Quảng Trị, 1 dự án tại
          Nha Trang và 1 dự án tại Hải Phòng sắp ra mắt...
        </p>
      </div>

      {/* MAP + PINS */}
      <div className="relative z-10 flex flex-col items-center gap-2.5 px-4 md:px-10">
        <img
          className="h-[400px] w-auto object-contain md:h-[500px]"
          alt="Vietnam"
          src="https://c.animaapp.com/Bhe9g9ou/img/vietnam-2-1.png"
        />

        {pins.map((pin, index) => (
          <div
            key={index}
            className="absolute hidden md:block"
            style={{
              top: pin.top,
              left: pin.left,
              width: pin.width,
              height: pin.height,
            }}
          >
            <div
              className={`${pin.shadowClass} absolute left-[33.33%] top-[90.38%] h-[9.62%] w-[33.33%] opacity-20 blur-[1px]`}
            />

            <img
              className="absolute left-0 top-0 h-full w-full"
              alt="Pin"
              src={pin.pinSrc}
            />

            <img
              className="absolute left-[9.52%] top-[7.69%] h-[92.31%] w-[90.48%]"
              alt="Circle"
              src={pin.circleSrc}
            />

            <img
              className={pin.buildingClass}
              alt="Building"
              src={pin.buildingSrc}
            />
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="relative z-10 flex w-full max-w-sm flex-col gap-6 rounded-2xl bg-white p-6 shadow-xl md:flex-1">
        <div className="border-b pb-4">
          <div className="text-xl font-bold text-brand">
            Light Housing Huế
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {detailRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col gap-4">
              <div className="flex justify-between gap-4">
                {row.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-1 flex-col gap-1">
                    <div className="text-xs text-gray-400">
                      {item.label}
                    </div>

                    <div
                      className={`text-sm font-semibold ${
                        item.isSuccess
                          ? 'text-green-600'
                          : 'text-gray-900'
                      }`}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {rowIndex < detailRows.length - 1 && (
                <div className="h-px w-full bg-gray-100" />
              )}
            </div>
          ))}
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-white transition-colors hover:bg-brand-dark">
          <span className="text-sm font-semibold underline">
            Xem chi tiết
          </span>

          <img
            className="h-4 w-4 invert brightness-0"
            alt="Chevron right"
            src="https://c.animaapp.com/Bhe9g9ou/img/chevron-right.svg"
          />
        </button>
      </div>
    </div>
  );
};
