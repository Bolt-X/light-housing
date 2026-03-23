'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

type SearchListContentProps = {
  collection: any;
  type: string;
  limit?: number;
  url?: string;
  title?: string;
  setTotalAll: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  cardType?: string;
};

export default function SearchListContent({
  title = '',
  setTotalAll,
}: SearchListContentProps) {
  const t = useTranslations('Common');

  // Placeholder simplified logic
  React.useEffect(() => {
    setTotalAll(0);
  }, [setTotalAll]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-primary-600">{title}</h2>
      <div className="rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-400">
        {t('no-data')}
      </div>
    </div>
  );
}
