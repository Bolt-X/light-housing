'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import NextImg from '../next-img';
import { useMetadata } from '@/src/providers/MetadataProvider';
import NavHeader from './NavHeader';
import MobileMenu from './MenuMobile';
import LanguageBtn from './LanguageBtn';
import { Link } from '@/src/i18n/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/src/lib/utils';
import { SOCIAL_LINKS } from '@/src/constants/footer';

export default function TheHeader() {
  const t = useTranslations('Href');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const handleSearch = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams();
      params.set(key, value.trim());
      router.push(`${t('search')}?${params.toString()}`);
    },
    [router, t],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-[100] w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-transparent bg-brand/80 py-3 shadow-md backdrop-blur-md'
          : 'border-b border-white/20 bg-transparent py-6',
      )}
    >
      <div className="container flex max-w-full items-center justify-between 4xl:max-w-[1880px]">
        <div className="flex items-center gap-8 xl:gap-10">
          <Link
            href={'/' as any}
            title="Trang chủ"
            aria-label="Chuyển đến trang chủ"
            className="relative aspect-[22/8] h-8 flex-shrink-0"
          >
            <NextImg
              src="/assets/logo/logo_primary_light.svg"
              alt="Light Housing logo"
              loading="eager"
              fetchPriority="high"
              className="object-contain"
            />
          </Link>

          <div className="mt-1 hidden 2xl:block">
            <NavHeader isScrolled={isScrolled} />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 2xl:flex">
            <div className="relative w-48 xl:w-56">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                onChange={(e) => {
                  /* Optional: could add local state, but usually handled in form or handled dynamically */
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter')
                    handleSearch('search', e.currentTarget.value);
                }}
                className="w-full rounded-full border border-white/50 bg-transparent py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/80 focus:border-white focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <img
                    className="h-5 w-5 object-contain brightness-0 invert"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="block 2xl:hidden">
              <MobileMenu handleSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
