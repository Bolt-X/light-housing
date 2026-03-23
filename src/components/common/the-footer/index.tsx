'use client';
import { useState } from 'react';

const contactInfoItems = [
  {
    icon: '/assets/icons/map_point.svg',
    alt: 'Outline map location',
    text: 'Số 11B Cát Linh, phường Ô Chợ Dừa, thành phố Hà Nội',
  },
  {
    icon: '/assets/icons/mail.svg',
    alt: 'Huge icon',
    text: 'info@lighthousing.vn',
  },
  {
    icon: '/assets/icons/phone.svg',
    alt: 'Outline call phone',
    text: '098 904 8810',
  },
];

const aboutLinks = [
  'Về Lighthousing',
  'Cẩm nang mua nhà',
  'Chính sách',
  'Tin tức',
];

const socialIcons = [
  {
    src: 'https://c.animaapp.com/Bhe9g9ou/img/huge-icon-social-solid-facebook-1.svg',
    alt: 'Huge icon social facebook',
  },
  {
    src: 'https://c.animaapp.com/Bhe9g9ou/img/huge-icon-social-solid-youtube-1.svg',
    alt: 'Huge icon social youtube',
  },
  {
    src: 'https://c.animaapp.com/Bhe9g9ou/img/huge-icon-social-solid-messenger-1.svg',
    alt: 'Huge icon social messenger',
  },
];

const TheFooter = (): React.ReactNode => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="relative flex w-full flex-col gap-6 bg-[linear-gradient(143deg,rgba(2,58,92,1)_0%,rgba(115,175,214,1)_100%)] p-4 md:gap-8 md:p-8 lg:gap-10 lg:py-12 xl:gap-12 xl:py-12 2xl:p-20 3xl:py-[100px]">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[60px] 4xl:mx-auto 4xl:max-w-[1880px]">
        {/* LOGO & INFO */}
        <div className="flex flex-col items-center gap-6 md:items-start md:gap-8 lg:flex-[1_0_400px] xl:flex-[1_0_500px]">
          <img
            className="h-10 w-fit object-contain xl:h-16"
            alt="Logo white"
            src="/assets/logo/logo_primary_light.svg"
          />

          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg font-bold text-white md:text-lg lg:text-[22px] xl:text-[30px] 4xl:text-[36px]">
              CÔNG TY CỔ PHẦN LIGHT HOUSING
            </h3>

            <div className="flex flex-col gap-3">
              {contactInfoItems.map((item, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer items-start gap-4 transition-transform hover:translate-x-1"
                >
                  <img
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    alt={item.alt}
                    src={item.icon}
                  />
                  <p className="text-sm leading-relaxed text-white/80 md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 lg:flex-[1_0_156px] xl:flex-[1_0_200px] xl:flex-row 2xl:flex-[1_0_380px] 2xl:gap-[60px] 3xl:flex-[1_0_440px]">
          {/* NAVIGATION */}
          <div className="flex flex-col gap-4 md:gap-6 4xl:flex-1">
            <h4 className="text-lg font-bold text-white md:text-lg 3xl:text-[22px]">
              Về chúng tôi
            </h4>

            <nav className="flex flex-col gap-3 2xl:gap-4">
              {aboutLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-white/80 transition-colors hover:text-white md:text-base"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* SOCIAL & APPS */}
          <div className="flex flex-col gap-10 2xl:gap-[60px]">
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-lg font-bold text-white md:text-lg 3xl:text-[22px]">
                Theo dõi chúng tôi
              </h4>
              <div className="flex items-start gap-4 xl:gap-6">
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="transition-transform hover:scale-110"
                  >
                    <img className="h-6 w-6" alt={icon.alt} src={icon.src} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-lg font-bold text-white md:text-lg 3xl:text-[22px]">
                Ứng dụng
              </h4>
              <div className="flex flex-wrap gap-4 xl:flex-col 4xl:flex-row">
                <a
                  href="#"
                  className="flex h-10 w-[120px] items-center gap-2 rounded-lg border border-white/20 bg-white p-2 transition-colors hover:bg-white"
                >
                  <img
                    className="h-6 w-6"
                    alt="Glyphs play store"
                    src="/assets/icons/play store.svg"
                  />

                  <div>
                    <p className="text-[6px] text-gray-500">Download on the</p>
                    <p className="text-xs font-bold text-gray-900">
                      Play Store
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex h-10 w-[120px] items-center gap-2 rounded-lg border border-white bg-white p-2 transition-colors hover:bg-white"
                >
                  <img
                    className="h-6 w-6"
                    alt="Glyphs app store"
                    src="/assets/icons/app store.svg"
                  />

                  <div>
                    <p className="text-[6px] text-gray-500">Download on the</p>
                    <p className="text-xs font-bold text-gray-900">App Store</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="flex flex-col gap-6 lg:max-w-md">
          <h4 className="text-lg font-bold text-white md:text-lg 3xl:text-[22px]">
            Gửi tin nhắn cho chúng tôi
          </h4>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-wrap gap-3 xl:gap-4"
          >
            <div className="flex w-full flex-wrap gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Họ và tên..."
                className="text-brand-dark placeholder:text-brand-dark/70 w-full rounded-lg bg-white/50 px-3 py-2 text-sm outline-none md:w-[calc(50%_-_8px)] lg:w-full lg:text-base"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập địa chỉ mail"
                className="text-brand-dark placeholder:text-brand-dark/70 w-full rounded-lg bg-white/50 px-3 py-2 text-sm outline-none md:w-[calc(50%_-_8px)] lg:w-full lg:text-base"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="text-brand-dark placeholder:text-brand-dark/70 min-h-[120px] w-full resize-none rounded-lg bg-white/50 px-3 py-2 text-sm outline-none lg:text-base"
              rows={4}
            />

            <button
              type="submit"
              className="hover:bg-brand w-full rounded-lg bg-[#023A5C] py-3 text-base font-semibold text-white transition-all"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>

      <div className="flex w-full items-center justify-center border-t border-white/50 pt-6 text-center lg:pt-8 xl:items-start xl:justify-start xl:pt-10 xl:text-left xl:text-base 4xl:mx-auto 4xl:max-w-[1880px]">
        <p className="text-sm font-normal text-white">
          Copyright © 2025 LIGHT HOUSING. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
