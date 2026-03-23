import React from 'react';
import NextImg from '../../common/next-img';

export default function LoadingComp() {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div className="relative size-6 animate-spin md:size-7 xl:size-9 3xl:size-10">
        <NextImg src="/assets/icons/loading_spin.svg" alt="loading spin" />
      </div>
    </div>
  );
}
