import { CommonSection } from '@/src/types/pageBuilder';
import { getAssetUrlById } from '@/src/utils/image';
import React from 'react';
import CustomLink from '../../common/custom-link';

export default function PDFViewer({ data }: CommonSection) {
  const url = getAssetUrlById(data?.cover?.[0]?.id);
  const button = data?.buttons?.[0];

  return <section></section>;
}
