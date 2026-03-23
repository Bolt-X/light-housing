'use client';
import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { useLocale } from 'next-intl';
import { useRouter } from '@/src/i18n/navigation';
import { routing } from '@/src/i18n/routing';
import NextImg from '../next-img';

type LanguageBtnProps = {
  className?: string;
  side?: 'top' | 'bottom';
};

export default function LanguageBtn({
  className,
  side = 'bottom',
}: LanguageBtnProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    router.push('/' as any, { locale: newLocale });
  };

  return (
    <div
      title="Chuyển đổi ngôn ngữ"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={cn(
        'relative flex cursor-pointer items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors hover:text-primary-600',
        className,
      )}
    >
      <span className="min-w-[24px] text-center">{locale}</span>
      <div
        className="relative size-3.5 transition-transform duration-200"
        style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
      >
        <img
          src="/assets/icons/arrow_down_primary.svg"
          alt="arrow"
          className="size-full brightness-0"
        />
      </div>

      <div
        className={cn(
          'absolute right-0 z-[110] min-w-[80px] transition-all duration-300',
          isOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-2 scale-95 opacity-0',
          side === 'bottom' ? 'top-full pt-3' : 'bottom-full pb-3',
        )}
      >
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-2xl">
          {routing?.locales?.map((item: any, index: number) => {
            if (locale === item) return null;
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  switchLocale(item);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2.5 text-start text-xs font-bold uppercase text-gray-700 transition-all hover:bg-gray-50 hover:text-primary-600"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
