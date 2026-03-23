'use client';
import React, { useState } from 'react';
import { CommonSection } from '@/src/types/pageBuilder';
import { useTranslations } from 'next-intl';
import SearchListContent from './SearchListContent';

export default function CustomSearch({ data }: CommonSection) {
  const t = useTranslations();
  const [totalAll, setTotalAll] = useState(0);
  const [keyword, setKeyword] = useState('');

  return <section></section>;
}
