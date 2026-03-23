'use client';
import React from 'react';
import { getAssetUrlById } from '@/src/utils/image';
import NextImg from '../../common/next-img';

export default function Card1ColDetail({ event, data }: any) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row">
      <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-2xl md:aspect-square md:w-48">
        <NextImg
          src={getAssetUrlById(
            event?.cover?.id || event?.images?.[0]?.directus_files_id,
          )}
          alt={event?.title}
          objectFit="cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="mb-3 text-2xl font-bold">
          {event?.title || event?.translations?.[0]?.title}
        </h3>
        <div
          className="mb-4 line-clamp-3 text-gray-500"
          dangerouslySetInnerHTML={{
            __html: event?.blurb || event?.translations?.[0]?.blurb,
          }}
        />
        {data?.buttons?.[0] && (
          <button className="group flex items-center gap-2 font-bold text-primary-600">
            {data.buttons[0].title}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
