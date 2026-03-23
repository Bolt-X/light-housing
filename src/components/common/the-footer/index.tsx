'use client';
import React from 'react';
import NextImg from '@/src/components/common/next-img';
import { useMetadata } from '@/src/providers/MetadataProvider';
import Link from 'next/link';
import CustomLink from '../custom-link';
import { useTranslations } from 'next-intl';
import { cn } from '@/src/lib/utils';

export default function TheFooter() {
  const t = useTranslations();
  const metadata = useMetadata();
  const contact_information = metadata?.contact_information;
  const bottom_navigation = metadata?.bottom_navigation;

  // Combining sub_items from bottom navigation sections for the two-column quick links
  // We'll take sub_items from the first few sections if they exist
  const all_quick_links =
    bottom_navigation?.flatMap((section: any) => section.sub_items) || [];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="min-h-[400px] bg-[#0d4a4a] pb-8 pt-16 text-white lg:pt-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="relative inline-block h-24 w-60">
              <NextImg
                src="/assets/logo/logo_primary_light.svg"
                alt="Ramond Urbaniz Sam Son"
                className="object-contain object-left"
              />
            </Link>
            <p className="max-w-[340px] text-sm leading-relaxed text-white/70">
              Ramond Urbaniz không chỉ mang đến hệ sinh thái nhà ở – thương mại
              – cảnh quan – tiện ích đẳng cấp, mà còn góp phần thay đổi diện mạo
              đô thị nơi đây.
            </p>
          </div>

          {/* Column 2: VỀ CHÚNG TÔI */}
          <div className="space-y-8 lg:col-span-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
              VỀ CHÚNG TÔI
            </h3>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex gap-2">
                <span className="shrink-0 text-white/50">Hotline:</span>
                <a
                  href={`tel:${contact_information?.hot_line}`}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {contact_information?.hot_line}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="shrink-0 text-white/50">Email:</span>
                <a
                  href={`mailto:${contact_information?.email}`}
                  className="break-all text-white/80 transition-colors hover:text-white"
                >
                  {contact_information?.email}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="shrink-0 text-white/50">Facebook:</span>
                <a
                  href="#"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Fanpage Ramond Urbaniz Sầm Sơn
                </a>
              </div>
              <div className="flex gap-2">
                <span className="shrink-0 text-white/50">Địa chỉ:</span>
                <span className="leading-relaxed text-white/80">
                  {contact_information?.address}
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: LIÊN KẾT NHANH */}
          <div className="space-y-8 lg:col-span-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
              LIÊN KẾT NHANH
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {all_quick_links.slice(0, 8).map((link: any, idx: number) => (
                <CustomLink
                  key={idx}
                  href={link.url}
                  className="transform text-sm text-white/70 transition-all hover:translate-x-1 hover:text-white"
                >
                  {link.title}
                </CustomLink>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            © 2025 — RAMOND URBANIZ SAM SON
          </p>

          <button
            onClick={scrollToTop}
            title="Cuộn lên đầu trang"
            className="group relative flex size-12 items-center justify-center rounded-full border border-white/10 transition-all hover:border-white/40 hover:bg-white/5"
          >
            <div className="relative size-5 rotate-180 transition-transform group-hover:-translate-y-1">
              <NextImg
                src="/assets/icons/arrow_down_white.svg"
                alt="Back to top"
              />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
