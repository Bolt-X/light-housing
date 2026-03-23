'use client';
import { CommonSection } from '@/src/types/pageBuilder';
import React, { useState } from 'react';
import NextImg from '../../common/next-img';
import { getAssetUrlById } from '@/src/utils/image';
import { useTranslations } from 'next-intl';

export default function ReviewSplitWithText({ data }: CommonSection) {
  const t = useTranslations();
  const [rating, setRating] = useState(5);

  return <section></section>;
}
