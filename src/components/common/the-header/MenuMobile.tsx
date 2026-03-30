'use client';

import React, { useRef, useState } from 'react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useScrollSmoother } from '@/src/providers/ScrollSmootherProvider';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionRoot,
} from '../../ui/accordion';
import {
  Dialog,
  DialogContentMenuMobile,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from '../../ui/dialog';
import CustomLink from '../custom-link';
import { Link } from '@/src/i18n/navigation';

type MobileMenuProps = {
  handleSearch: (key: string, value: string) => void;
};

// Dummy navigation mapped to the design requirements
import { NAVIGATION_DATA, NavigationItem } from '@/src/constants/navigation';


export default function MobileMenu({ handleSearch }: MobileMenuProps) {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const { lenis } = useScrollSmoother();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => lenis?.stop()}
        asChild
        className="block"
      >
        <button className="relative size-10">
          <img
            src="/assets/icons/ham_menu.svg"
            alt="menu icon"
            loading="eager"
            className="size-full"
          />
        </button>
      </DialogTrigger>

      <DialogContentMenuMobile onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="hidden">
          <DialogTitle>Mobile menu</DialogTitle>
          <DialogDescription>Mobile menu</DialogDescription>
        </div>

        <div className="bg-brand-50 flex h-[100dvh] flex-col items-stretch gap-6 overflow-hidden">
          {/* header */}
          <div className="flex items-center justify-between px-[30px] pb-2 pt-6">
            <DialogClose
              onClick={() => {
                setIsOpenSubMenu(false);
                lenis?.start();
              }}
              asChild
              className="border-none outline-none"
            >
              <Link
                href={'/' as any}
                aria-label="Chuyển đến trang chủ"
                className="relative aspect-[22/8] h-8 overflow-hidden"
              >
                <img
                  src="/assets/logo/logo_primary_light.svg"
                  alt="Light Housing logo"
                  className="h-full w-full object-contain object-left"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            </DialogClose>

            <DialogClose
              onClick={() => {
                setIsOpenSubMenu(false);
                lenis?.start();
              }}
              asChild
              className="border-none outline-none"
            >
              <button className="flex size-10 items-center justify-center text-white outline-none">
                <img
                  src="/assets/icons/close.svg"
                  alt="Close"
                  className="h-6 w-6 object-contain brightness-0 invert"
                />
              </button>
            </DialogClose>
          </div>

          <div className="relative px-[30px]">
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch('search', searchText);
              }}
              className="w-full rounded-full border border-white/50 bg-transparent py-2.5 pl-10 pr-4 text-base text-white placeholder:text-white/80 focus:border-white focus:outline-none"
            />
          </div>

          <div className="relative w-full flex-1 overflow-y-auto overflow-x-hidden px-[30px] pb-4">
            <AccordionRoot
              className="w-full"
              type="multiple"
              defaultValue={['item-1', 'item-3']}
            >
              {NAVIGATION_DATA.map((item: NavigationItem, index: number) => {
                const hasSubItems = (item.sub_items?.length ?? 0) > 0;

                return (
                  <div
                    key={index}
                    className="border-b border-white/30 last:border-none"
                  >
                    {hasSubItems ? (
                      <AccordionItem
                        value={`item-${index}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="group flex w-full items-center justify-between border-b border-white/30 py-4 text-base font-medium uppercase tracking-wider text-white transition-opacity last:border-none hover:opacity-80">
                          {item.title}
                          <div className="relative transition-transform duration-200 group-data-[state=open]:rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2.5"
                              stroke="currentColor"
                              className="h-4 w-4 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col">
                            {item.sub_items?.map((sub: NavigationItem, sIdx: number) => {
                              const hasThirdLevel = (sub.sub_items?.length ?? 0) > 0;

                              if (hasThirdLevel) {
                                return (
                                  <AccordionRoot
                                    type="multiple"
                                    key={sIdx}
                                  >
                                    <AccordionItem
                                      value={`sub-${sIdx}`}
                                      className="border-none"
                                    >
                                      <AccordionTrigger className="group flex w-full items-center justify-between py-3 pl-8 pr-4 text-base font-medium uppercase tracking-wider text-white transition-opacity last:border-none hover:opacity-80">
                                        {sub.title}
                                        <div className="relative transition-transform duration-200 group-data-[state=open]:rotate-180">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className="h-4 w-4 text-white"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                          </svg>
                                        </div>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <div className="flex flex-col">
                                          {sub.sub_items?.map(
                                            (third: NavigationItem, tIdx: number) => (
                                              <DialogClose
                                                key={tIdx}
                                                onClick={() => lenis?.start()}
                                                asChild
                                              >
                                                <CustomLink
                                                  href={third.url}
                                                  className={`py-3 pl-12 pr-4 text-base font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-80 ${
                                                    tIdx !== sub.sub_items!.length - 1
                                                      ? 'border-b border-white/20'
                                                      : ''
                                                  }`}
                                                >
                                                  {third.title}
                                                </CustomLink>
                                              </DialogClose>
                                            )
                                          )}
                                        </div>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </AccordionRoot>
                                );
                              }

                              return (
                                <DialogClose
                                  key={sIdx}
                                  onClick={() => lenis?.start()}
                                  asChild
                                >
                                  <CustomLink
                                    href={sub.url}
                                    className={`py-3 pl-8 pr-4 text-base font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-80 ${
                                      sIdx !== item.sub_items!.length - 1
                                        ? 'border-b border-white/20'
                                        : ''
                                    }`}
                                  >
                                    {sub.title}
                                  </CustomLink>
                                </DialogClose>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <DialogClose
                        onClick={() => lenis?.start()}
                        asChild
                      >
                        <CustomLink
                          href={item.url || ''}
                          className="block py-4 text-base font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-80"
                        >
                          {item.title}
                        </CustomLink>
                      </DialogClose>
                    )}
                  </div>
                );
              })}
            </AccordionRoot>

            <div className="mt-16 flex flex-col items-center">
              <p className="mb-6 text-base font-medium uppercase tracking-wider text-white">
                Theo dõi chúng tôi trên
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="#"
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <img
                    src="/assets/icons/facebook.svg"
                    alt="Facebook"
                    className="size-6"
                  />
                </Link>
                <Link
                  href="#"
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <img
                    src="/assets/icons/youtube.svg"
                    alt="Youtube"
                    className="size-6"
                  />
                </Link>
                <Link
                  href="#"
                  className="text-white transition-opacity hover:opacity-80"
                >
                  <img
                    src="/assets/icons/messenger.svg"
                    alt="Messenger"
                    className="size-6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DialogContentMenuMobile>
    </Dialog>
  );
}
