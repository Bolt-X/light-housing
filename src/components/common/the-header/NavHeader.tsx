'use client';
import CustomLink from '../custom-link';
import React from 'react';

import { NAVIGATION_DATA, NavigationItem } from '@/src/constants/navigation';

export default function NavHeader({ isScrolled }: { isScrolled?: boolean }) {
  return (
    <nav className="relative z-[100] w-full">
      <ul className="flex items-center gap-6 xl:gap-8">
        {NAVIGATION_DATA.map((item: NavigationItem, index: number) => {
          const hasSubItems = (item.sub_items?.length ?? 0) > 0;

          return (
            <li key={index} className="group relative">
              {hasSubItems ? (
                <>
                  <div className="flex cursor-pointer items-center gap-1.5 py-3 text-base font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-80">
                    {item.title}
                    <div className="relative size-3.5 transition-transform duration-200 group-hover:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-full w-full text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Dropdown container */}
                  <div className="invisible absolute left-0 top-[100%] w-fit min-w-[240px] translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="border-t border-white/20 bg-[#7aaad0]/95 shadow-xl backdrop-blur-sm">
                      {item.sub_items?.map(
                        (sub: NavigationItem, sIdx: number) => {
                          const hasThirdLevel =
                            (sub.sub_items?.length ?? 0) > 0;
                          return (
                            <div key={sIdx} className="group/sub relative">
                              <CustomLink
                                href={sub.url}
                                className={`flex items-center justify-between gap-4 p-3 text-base font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-80 ${
                                  sIdx !== item.sub_items!.length - 1
                                    ? 'border-b border-white/20'
                                    : ''
                                }`}
                              >
                                {sub.title}
                                {hasThirdLevel && (
                                  <div className="size-3.5 transition-transform duration-200">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="h-full w-full text-white"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M7.21 14.71a.75.75 0 0 1 0-1.06L10.65 10l-3.44-3.65a.75.75 0 1 1 1.06-1.06l4 4.25a.75.75 0 0 1 0 1.06l-4 4.25a.75.75 0 0 1-1.06 0Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </CustomLink>

                              {hasThirdLevel && (
                                <div className="invisible absolute left-[100%] top-0 min-w-[240px] translate-x-2 opacity-0 transition-all duration-300 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                                  <div className="bg-[#7aaad0]/95 px-4 shadow-xl backdrop-blur-sm">
                                    {sub.sub_items?.map(
                                      (third: NavigationItem, tIdx: number) => (
                                        <CustomLink
                                          key={tIdx}
                                          href={third.url}
                                          className={`block py-3 text-base font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-80 ${
                                            tIdx !== sub.sub_items!.length - 1
                                              ? 'border-b border-white/20'
                                              : ''
                                          }`}
                                        >
                                          {third.title}
                                        </CustomLink>
                                      ),
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        },
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <CustomLink
                  href={item.url || ''}
                  className="block py-3 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-80 xl:text-base"
                >
                  {item.title}
                </CustomLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
