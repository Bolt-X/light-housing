'use client';

import React, { useRef, useState } from 'react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useScrollSmoother } from '@/src/providers/ScrollSmootherProvider';
import NextImg from '../next-img';
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
import { useMetadata } from '@/src/providers/MetadataProvider';
import CustomLink from '../custom-link';
import { cn } from '@/src/lib/utils';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';

type MobileMenuProps = {
  handleSearch: (key: string, value: string) => void;
};

export default function MobileMenu({ handleSearch }: MobileMenuProps) {
  const metadata = useMetadata();
  const top_navigation = metadata?.top_navigation;
  const t = useTranslations();

  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false);
  const [itemSecond, setItemSecond] = useState<any>();
  const [searchText, setSearchText] = useState<string>('');
  const { smoother } = useScrollSmoother();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => smoother?.paused(true)}
        asChild
        className="block"
      >
        <button className="flex size-10 items-center justify-center lg:hidden">
          <div className="relative size-6">
            <img
              src="/assets/icons/ham_menu.svg"
              alt="menu icon"
              loading="eager"
              className="size-full brightness-0"
            />
          </div>
        </button>
      </DialogTrigger>

      <DialogContentMenuMobile onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="hidden">
          <DialogTitle>Mobile menu</DialogTitle>
          <DialogDescription>Mobile menu</DialogDescription>
        </div>

        <div className="container flex h-screen flex-col items-stretch overflow-hidden bg-white">
          {/* header */}
          <div className="flex items-center justify-between border-b border-gray-100 py-4">
            <DialogClose
              onClick={() => {
                setIsOpenSubMenu(false);
                smoother?.paused(false);
              }}
              asChild
              className="border-none outline-none"
            >
              <Link
                href={'/' as any}
                aria-label="Chuyển đến trang chủ"
                className="relative h-10 w-40"
              >
                <NextImg
                  src="/assets/logo/logo_primary_dark.svg"
                  alt="Ramond Urbaniz logo"
                  className="object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            </DialogClose>

            <div className="flex items-center gap-4">
              <DialogClose
                ref={closeButtonRef}
                onClick={() => {
                  setIsOpenSubMenu(false);
                  smoother?.paused(false);
                }}
                asChild
                className="border-none outline-none"
              >
                <div className="flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-100">
                  <div className="relative size-5">
                    <img
                      src="/assets/icons/close.svg"
                      alt="close icon"
                      className="size-full brightness-0"
                    />
                  </div>
                </div>
              </DialogClose>
            </div>
          </div>

          <div className="relative flex h-[calc(100vh-64px)] flex-col items-stretch">
            <div className="scrollbar-hidden relative flex-1 overflow-x-hidden overflow-y-scroll pb-20">
              <div className="relative w-full space-y-8 py-8">
                {/* menu main */}
                <AccordionRoot
                  className="relative w-full space-y-4"
                  type="single"
                  collapsible
                >
                  {top_navigation &&
                    top_navigation?.map((item: any, index: any) => {
                      const hasSubItems = item?.sub_items?.length > 0;

                      return (
                        <div key={index} className="px-1">
                          {hasSubItems ? (
                            <AccordionItem
                              value={`item-${index}`}
                              className="border-none"
                            >
                              <AccordionTrigger className="flex w-full items-center justify-between py-4 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors hover:text-primary-600">
                                {item?.title}
                                <div className="relative size-5 transition-transform duration-200 group-data-[state=open]:rotate-180">
                                  <NextImg
                                    src="/assets/icons/arrow_down_black.svg"
                                    alt="arrow"
                                  />
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-4 pl-4 pt-2">
                                  {item?.sub_items?.map(
                                    (sub: any, sIdx: number) => (
                                      <DialogClose
                                        key={sIdx}
                                        onClick={() => smoother?.paused(false)}
                                        asChild
                                      >
                                        <CustomLink
                                          href={sub?.url}
                                          className="py-2 text-sm font-medium text-gray-500 hover:text-primary-600"
                                        >
                                          {sub?.title}
                                        </CustomLink>
                                      </DialogClose>
                                    ),
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ) : (
                            <DialogClose
                              onClick={() => smoother?.paused(false)}
                              asChild
                            >
                              <CustomLink
                                href={item?.url || ''}
                                className="block py-4 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors hover:text-primary-600"
                              >
                                {item?.title}
                              </CustomLink>
                            </DialogClose>
                          )}
                        </div>
                      );
                    })}
                </AccordionRoot>
              </div>
            </div>
          </div>
        </div>
      </DialogContentMenuMobile>
    </Dialog>
  );
}
