'use client';

import { cn } from '@/src/lib/utils';
import { useRef } from 'react';
import { CommonSection } from '@/src/types/pageBuilder';
import { getAssetUrlById } from '@/src/utils/image';

export default function NumberNone({ data }: CommonSection) {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = data?.items || [];

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[400px] w-full flex-col items-center py-10 md:min-h-[622px] xl:py-20"
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-10">
        <div className="container flex w-full flex-col items-center gap-2 xl:gap-3">
          <div className="section-subtitle text-center">{data?.subtitle}</div>

          <p className="section-title text-center text-brand-dark">
            {data?.title}
          </p>
        </div>

        <div className="custom-scrollbar w-full overflow-x-auto overflow-y-hidden pb-6">
          <div className="mx-auto grid w-max grid-cols-5 gap-8 px-4 md:gap-10 md:px-10 xl:max-w-none xl:grid-cols-5">
            {items.map((item: any, index: number) => {
              const imagePosition = index % 2 === 0 ? 'top' : 'bottom';
              return (
                <div
                  key={index}
                  className={cn(
                    'feature-item group mx-auto flex w-[192px] flex-col items-center justify-center text-center 2xl:w-[224px] 3xl:w-[256px] 4xl:w-[300px]',
                    imagePosition === 'top'
                      ? 'items-end justify-end'
                      : 'items-start justify-start',
                  )}
                >
                  {imagePosition === 'top' && (
                    <div className="mb-6 flex w-full flex-col items-center">
                      <img
                        src={getAssetUrlById(item.cover?.id)}
                        alt={item.title}
                        className="w-full"
                      />
                      <div className="z-10 -mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#034675] text-sm font-bold text-white">
                        {index + 1}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 transition-transform">
                    <h3 className="font-bold text-brand-dark 2xl:text-lg">
                      {item.title}
                    </h3>
                    <div
                      className="text-sm leading-relaxed text-gray-600"
                      dangerouslySetInnerHTML={{ __html: item.blurb ?? '' }}
                    />
                  </div>

                  {imagePosition === 'bottom' && (
                    <div className="mt-6 flex w-full flex-col items-center">
                      <div className="z-10 -mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#034675] text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <img
                        src={getAssetUrlById(item.cover?.id)}
                        alt={item.title}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
