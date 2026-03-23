'use client';
import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import CustomLink from '../custom-link';
import { cn } from '@/src/lib/utils';

export default function MegaMenuContent({ item }: any) {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <NavigationMenu.Content className="absolute left-0 top-full flex w-[80vw] max-w-[1200px] gap-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl duration-300 animate-in fade-in slide-in-from-top-2">
      {/* Sidebar Tabs */}
      <div className="flex w-1/4 flex-col gap-2 border-r border-gray-100 pr-8">
        {item?.sub_items?.map((sub: any, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentTab(index)}
            className={cn(
              'rounded-lg px-4 py-3 text-left text-sm font-bold uppercase tracking-wider transition-all',
              currentTab === index
                ? 'bg-primary-50 text-primary-600 shadow-sm'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900',
            )}
          >
            {sub?.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="flex-1">
        {item?.sub_items?.map((sub: any, index: number) => (
          <div
            key={index}
            className={cn(
              'grid grid-cols-3 gap-8',
              currentTab === index ? 'block' : 'hidden',
            )}
          >
            {sub?.sub_items?.map((group: any, gIdx: number) => (
              <div key={gIdx} className="space-y-4">
                <h4 className="border-b border-gray-50 pb-2 text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                  {group?.title}
                </h4>
                <div className="flex flex-col gap-3">
                  {group?.sub_items?.map((link: any, lIdx: number) => (
                    <CustomLink
                      key={lIdx}
                      href={link?.url}
                      className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
                    >
                      {link?.title}
                    </CustomLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </NavigationMenu.Content>
  );
}
