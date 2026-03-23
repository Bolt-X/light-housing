'use client';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useMetadata } from '@/src/providers/MetadataProvider';
import MegaMenuContent from './MegaMenuContent';
import CustomLink from '../custom-link';
import { cn } from '@/src/lib/utils';
import NextImg from '../next-img';

export default function NavHeader({ isScrolled }: { isScrolled?: boolean }) {
  const metadata = useMetadata();
  const top_navigation = metadata?.top_navigation;

  return (
    <NavigationMenu.Root className="relative w-full">
      <NavigationMenu.List className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
        {top_navigation?.length > 0 &&
          top_navigation?.map((item: any, index: any) => {
            const hasSubItems = item?.sub_items?.length > 0;

            return (
              <NavigationMenu.Item key={index}>
                {hasSubItems ? (
                  <>
                    <NavigationMenu.Trigger className="group flex items-center gap-1 py-2 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors hover:text-primary-600">
                      {item?.title}
                      <div className="relative size-4 transition-transform duration-200 group-data-[state=open]:rotate-180">
                        <NextImg
                          src="/assets/icons/arrow_down_primary.svg"
                          alt="arrow"
                          className="brightness-0"
                        />
                      </div>
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="absolute left-0 top-full mt-2 w-fit min-w-[200px] rounded-xl border border-gray-100 bg-white py-4 shadow-xl">
                      {item?.type === 'mega_menu' ? (
                        <MegaMenuContent item={item} />
                      ) : (
                        <div className="flex flex-col">
                          {item?.sub_items?.map((sub: any, sIdx: number) => (
                            <CustomLink
                              key={sIdx}
                              href={sub?.url}
                              className="px-6 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary-600"
                            >
                              {sub?.title}
                            </CustomLink>
                          ))}
                        </div>
                      )}
                    </NavigationMenu.Content>
                  </>
                ) : (
                  <CustomLink
                    href={item?.url || ''}
                    className="block py-2 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors hover:text-primary-600"
                  >
                    {item?.title}
                  </CustomLink>
                )}
              </NavigationMenu.Item>
            );
          })}
      </NavigationMenu.List>

      <div className="absolute left-0 top-full w-full pt-2">
        <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-2xl transition-all duration-300" />
      </div>
    </NavigationMenu.Root>
  );
}
