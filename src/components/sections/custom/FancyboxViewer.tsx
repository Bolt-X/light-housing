'use client';
import { CommonSection } from '@/src/types/pageBuilder';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import NextImg from '../../common/next-img';
import { getAssetUrlById } from '@/src/utils/image';
import Fancybox from '../../common/Fancybox';
import Link from 'next/link';
import useSwiperPagination from '@/src/hooks/useSwiperPagination';
import { useTranslations } from 'next-intl';

export default function FancyboxViewer({ data }: CommonSection) {
  const images = data?.cover ?? [];
  const imageStyle = data?.custom || {};

  const t = useTranslations('Common');
  const { paginationClass, paginationConfig } = useSwiperPagination();

  return <section></section>;
}
