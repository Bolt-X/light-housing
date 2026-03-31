'use client';
import { useState } from 'react';

import {
  ABOUT_LINKS,
  CONTACT_INFO,
  FOOTER_CONTENT,
  SOCIAL_LINKS,
} from '@/src/constants/footer';
import { Link } from '@/src/i18n/navigation';

import { useMetadata } from '@/src/providers/MetadataProvider';

const TheFooter = ({ data }: { data?: any }): React.ReactNode => {
  const { contact_information } = useMetadata();
  const contact = contact_information?.[0] || {};

  const navData = data && data.length > 0 ? (data as any[]) : ABOUT_LINKS;

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

  const dynamicContactInfo = [
    {
      icon: '/assets/icons/map_point.svg',
      alt: 'map',
      text: contact.address || CONTACT_INFO[0].text,
      href: contact.address_url || CONTACT_INFO[0].href,
    },
    {
      icon: '/assets/icons/mail.svg',
      alt: 'mail',
      text: contact.email || CONTACT_INFO[1].text,
      href: contact.email_url || CONTACT_INFO[1].href,
    },
    {
      icon: '/assets/icons/phone.svg',
      alt: 'phone',
      text: contact.hot_line || CONTACT_INFO[2].text,
      href: contact.hot_line_url || CONTACT_INFO[2].href,
    },
  ];

  const socialLinks = [
    {
      src: '/assets/icons/facebook.svg',
      alt: 'facebook',
      href: contact.facebook_url,
    },
    {
      src: '/assets/icons/youtube.svg',
      alt: 'youtube',
      href: contact.youtube_url,
    },
    {
      src: '/assets/icons/messenger.svg',
      alt: 'messenger',
      href: contact.messenger_url,
    },
  ].filter((link) => link.href);

  const finalSocialLinks = socialLinks.length > 0 ? socialLinks : SOCIAL_LINKS;

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
            <h3 className="text-lg font-bold uppercase text-white xl:text-xl 4xl:text-[24px]">
              {contact.footer_title || FOOTER_CONTENT.tagline}{' '}
              <br className="block md:hidden" />{' '}
              {contact.footer_description || FOOTER_CONTENT.companyName}
            </h3>

            <div className="flex flex-col gap-3">
              {dynamicContactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href as any}
                  target="_blank"
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
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 lg:flex-[1_0_156px] xl:flex-[1_0_200px] xl:flex-row 2xl:flex-[1_0_380px] 2xl:gap-[60px] 3xl:flex-[1_0_440px]">
          {/* NAVIGATION */}
          <div className="flex flex-col gap-4 md:gap-6 4xl:flex-1">
            <h4 className="text-lg font-bold text-white md:text-lg 3xl:text-[22px]">
              {FOOTER_CONTENT.aboutTitle}
            </h4>

            <nav className="flex flex-col gap-3 2xl:gap-4">
              {navData.map((link, index) => (
                <a
                  key={index}
                  href={link.url || link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white md:text-base"
                >
                  {link.title || link.text}
                </a>
              ))}
            </nav>
          </div>

          {/* SOCIAL & APPS */}
          <div className="flex flex-col gap-10 2xl:gap-[60px]">
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-lg font-bold text-white md:text-lg 3xl:text-[22px]">
                {FOOTER_CONTENT.followTitle}
              </h4>
              <div className="flex items-start gap-4 xl:gap-6">
                {finalSocialLinks.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <img className="h-6 w-6" alt={icon.alt} src={icon.src} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-lg font-bold text-white md:text-lg 3xl:text-[22px]">
                {FOOTER_CONTENT.appsTitle}
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
            {FOOTER_CONTENT.contactTitle}
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
                className="w-full rounded-lg bg-white/50 px-3 py-2 text-sm text-brand-dark outline-none placeholder:text-brand-dark/70 md:w-[calc(50%_-_8px)] lg:w-full lg:text-base"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập địa chỉ mail"
                className="w-full rounded-lg bg-white/50 px-3 py-2 text-sm text-brand-dark outline-none placeholder:text-brand-dark/70 md:w-[calc(50%_-_8px)] lg:w-full lg:text-base"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Nội dung tin nhắn..."
              className="min-h-[120px] w-full resize-none rounded-lg bg-white/50 px-3 py-2 text-sm text-brand-dark outline-none placeholder:text-brand-dark/70 lg:text-base"
              rows={4}
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-[#023A5C] py-3 text-base font-semibold text-white transition-all hover:bg-brand"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>

      <div className="flex w-full items-center justify-center border-t border-white/50 pt-6 text-center lg:pt-8 xl:items-start xl:justify-start xl:pt-10 xl:text-left xl:text-base 4xl:mx-auto 4xl:max-w-[1880px]">
        {contact.copy_right ? (
          <div
            className="text-sm font-normal text-white"
            dangerouslySetInnerHTML={{ __html: contact.copy_right }}
          />
        ) : (
          <p className="text-sm font-normal text-white">
            {FOOTER_CONTENT.copyright}
          </p>
        )}
      </div>
    </footer>
  );
};

export default TheFooter;
