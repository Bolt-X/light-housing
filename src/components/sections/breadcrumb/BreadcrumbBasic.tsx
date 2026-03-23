import { CommonSection } from '@/src/types/pageBuilder';
import React from 'react';
import CustomLink from '../../common/custom-link';
import { ChevronRight } from 'lucide-react';

export default function BreadcrumbBasic({ data }: CommonSection) {
  return (
    <nav className="border-b border-gray-100 bg-gray-50">
      <div className="container flex items-center gap-2 py-4 text-sm md:text-base">
        {data?.buttons?.map((button: any, index: number) => {
          const isLast = index === (data.buttons?.length || 0) - 1;

          return (
            <React.Fragment key={index}>
              <CustomLink
                href={button?.url || '/'}
                className={`${
                  isLast
                    ? 'pointer-events-none font-bold text-gray-900'
                    : 'text-gray-500 transition-colors hover:text-primary-600'
                }`}
              >
                {button?.title}
              </CustomLink>
              {!isLast && <ChevronRight className="size-4 text-gray-300" />}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
