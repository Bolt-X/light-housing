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
          ? 'bg-white/95 py-3 shadow-md backdrop-blur-md'
          : 'bg-transparent py-6',
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          href={'/' as any}
          title="Trang chủ"
          aria-label="Chuyển đến trang chủ"
          className="relative h-12 w-48 flex-shrink-0 lg:h-16 lg:w-64"
        >
          <NextImg
            src="/assets/logo/logo_primary_dark.svg"
            alt="Ramond Urbaniz logo"
            loading="eager"
            fetchPriority="high"
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden lg:block">
            <NavHeader isScrolled={isScrolled} />
          </div>

          <div className="flex items-center gap-4">
            {/* <LanguageBtn className="hidden xl:flex" /> */}
            <div className="lg:hidden">
              <MobileMenu handleSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
