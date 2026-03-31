import { CommonSection } from '@/src/types/pageBuilder';
import { getAssetUrlById } from '@/src/utils/image';
import { fnGetPosts } from '@/src/services/posts';
import { Link } from '@/src/i18n/navigation';

export default async function Posts3Col({ data }: CommonSection) {
  const newsItemsRaw = await fnGetPosts({ limit: 4 });
  const newsItems =
    newsItemsRaw && newsItemsRaw.length > 0 ? newsItemsRaw : data?.items || [];
  const moreButtonLabel = data?.buttons?.[0]?.label || 'Xem thêm';
  const moreButtonUrl = data?.buttons?.[0]?.url || '/tin-tuc';

  return (
    <div className="container relative flex w-full flex-col items-center gap-6 bg-white/5 py-10 xl:gap-[60px] xl:py-16">
      <img
        className="pointer-events-none absolute right-0 top-0 h-full w-full select-none object-cover opacity-60"
        alt="Bg pattern 2"
        src="/assets/bgs/bg-pattern-2.png"
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-3">
        <div className="section-subtitle !text-[#2F3037]">{data?.subtitle}</div>

        <p className="section-title text-center text-brand-dark">
          {data?.title}
        </p>
      </div>

      <div className="relative z-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 xl:gap-10">
        {newsItems.map((item: any, index: number) => {
          const itemContent = item?.short_content;
          const categoryName =
            item.categories?.[0]?.categories_id?.name ||
            item.subtitle ||
            'Tin tức';

          return (
            <Link
              key={index}
              href={`/tin-tuc/${itemContent.slug}`}
              className="group flex flex-col gap-4 overflow-hidden"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md xl:rounded-xl 2xl:rounded-2xl">
                <img
                  src={getAssetUrlById(itemContent?.thumbnail?.id)}
                  alt={itemContent.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="rounded-[4px] bg-brand-50 px-2 py-1 text-[10px] font-medium uppercase text-white xl:text-xs">
                    {categoryName}
                  </div>
                </div>

                <h4 className="line-clamp-2 text-base font-bold text-[#2F3037] transition-colors group-hover:text-brand lg:text-lg 2xl:text-[22px]">
                  {itemContent.title}
                </h4>

                <p className="line-clamp-3 text-sm leading-relaxed text-gray-500 2xl:text-base">
                  {itemContent.blurb}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href={moreButtonUrl}
        className="z-10 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand-dark px-4 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white xl:px-7 xl:py-3 xl:text-base"
      >
        {moreButtonLabel}
      </Link>
    </div>
  );
}
