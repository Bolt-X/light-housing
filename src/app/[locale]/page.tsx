import { routing } from '@/src/i18n/routing';
import { Metadata, ResolvingMetadata } from 'next';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import StaticHome from '@/src/components/sections/static/StaticHome';

export const revalidate = 300;

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

// ── Static SEO data (no CMS dependency) ──────────────────────────────────────
const SITE_URL = process.env.SITE_URL ?? 'https://lighthousing.vn';
const OG_IMAGE = `${SITE_URL}/assets/images/home_banner_slide_1.jpg`;

const SEO: Record<string, { title: string; description: string; keywords: string }> = {
  vi: {
    title: 'Light Housing – An Cư Bền Vững, Khởi Sinh Giá Trị Sống',
    description:
      'Light Housing là thương hiệu phát triển bất động sản quốc dân, tập trung vào các giải pháp nhà ở giá hợp lý, pháp lý minh bạch và chính sách tài chính linh hoạt giúp người trẻ và gia đình đô thị an cư bền vững.',
    keywords:
      'Light Housing, bất động sản, nhà ở giá rẻ, mua nhà lần đầu, an cư, pháp lý minh bạch, chung cư, nhà phố, tần số xanh',
  },
  en: {
    title: 'Light Housing – Sustainable Living, Real Value for Real People',
    description:
      'Light Housing is a national real estate brand focused on affordable, legally transparent housing solutions with flexible financial packages — helping young people and urban families settle sustainably.',
    keywords:
      'Light Housing, real estate, affordable housing, first home buyer, sustainable living, apartment, townhouse, Vietnam property',
  },
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params;
  const seo = SEO[locale] ?? SEO['vi'];

  const canonical = `${SITE_URL}/${locale}`;
  const languages = Object.fromEntries(
    routing.locales.map((lang) => [lang, `${SITE_URL}/${lang}`]),
  );

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      alternateLocale: locale === 'vi' ? 'en_US' : 'vi_VN',
      siteName: 'Light Housing',
      title: seo.title,
      description: seo.description,
      url: canonical,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <StaticHome />
    </>
  );
}

