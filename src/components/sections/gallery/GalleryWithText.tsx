'use client';
import { CommonSection } from '@/src/types/pageBuilder';
import React, { useState } from 'react';
import NextImg from '../../common/next-img';
import { getAssetUrlById } from '@/src/utils/image';

export default function GalleryWithText({ data }: CommonSection) {
  const [currentTab, setCurrentTab] = useState(0);

  return <section></section>;
}
