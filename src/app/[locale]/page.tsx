import JsonLDProvider from '@/src/components/common/the-json-ld';
import { getLangSlug, routing } from '@/src/i18n/routing';
import PageBuilder from '@/src/page-builder';
import { fnGetPageBySlug } from '@/src/services/pages';
import { createSeoData } from '@/src/utils/metadata';
import { Metadata, ResolvingMetadata } from 'next';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { PROJECT_CONSTANTS } from '@/src/constants/project';

export const revalidate = 300;

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params;
  const langSlug = await getLangSlug(locale, PROJECT_CONSTANTS.HOME_PAGE_SLUG);

  const data = await fnGetPageBySlug(langSlug);
  const seo = createSeoData(data?.seo, locale) ?? {};
  return seo;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const langSlug = await getLangSlug(locale, PROJECT_CONSTANTS.HOME_PAGE_SLUG);
  const pageContent = await fnGetPageBySlug(langSlug);
  const pageSchema = pageContent?.seo?.meta_schema;

  return (
    <>
      <JsonLDProvider pageSchema={pageSchema} />
      <PageBuilder pageContent={pageContent} />
    </>
  );
}
