import React, { Suspense } from 'react';
import '../../styles/globals.css';

import { ThemeProvider } from '../../providers/theme-provider';
import { fnGetMetadata } from '../../services/metadata';
import { MetadataProvider } from '../../providers/MetadataProvider';
import { GsapMatchMediaProvider } from '../../providers/GsapMatchMediaProvider';
import { ScrollSmootherProvider } from '../../providers/ScrollSmootherProvider';
import TheHeader from '../../components/common/the-header';
import TheFooter from '../../components/common/the-footer';
import BackToTop from '../../components/common/back-to-top';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { LoadingComp } from '@/src/components/sections/custom';
import Loading from '../loading';
import localFont from 'next/font/local';
import LazyToastContainer from '../../components/common/lazy-toast-container';
import ReCaptchatProvider from '@/src/providers/GoogleRecaptchaProvider';
import Script from 'next/script';

const svnGilroy = localFont({
  src: [
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Thin.otf', weight: '100', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Thin Italic.otf', weight: '100', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Xlight.otf', weight: '200', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Xlight Italic.otf', weight: '200', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Light.otf', weight: '300', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Light Italic.otf', weight: '300', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Regular.otf', weight: '400', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Italic.otf', weight: '400', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Medium.otf', weight: '500', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Medium Italic.otf', weight: '500', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy SemiBold.otf', weight: '600', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy SemiBold Italic.otf', weight: '600', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Bold.otf', weight: '700', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Bold Italic.otf', weight: '700', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy XBold.otf', weight: '800', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy XBold Italic.otf', weight: '800', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Heavy.otf', weight: '900', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Heavy Italic.otf', weight: '900', style: 'italic' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Black.otf', weight: '950', style: 'normal' },
    { path: '../../../public/fonts/SVN-Gilroy/SVN-Gilroy Black Italic.otf', weight: '950', style: 'italic' },
  ],
  variable: '--font-svn-gilroy',
  display: 'swap',
});

export const revalidate = 300;

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const [metadata, messages] = await Promise.all([
    fnGetMetadata(locale),
    getMessages({ locale }),
  ]);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${svnGilroy.variable} font-sans`}
    >
      <head>
        <link rel="icon" href="/assets/logo/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo/favicon-16x16.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/logo/android-chrome-192x192.png"
        ></link>
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/assets/logo/apple-touch-icon-180x180.png"
        ></link>

        <link rel="dns-prefetch" href="//www.google.com" />
        <link
          rel="preconnect"
          href="//www.google.com"
          crossOrigin="anonymous"
        />
        <meta
          name="msapplication-TileImage"
          content="/assets/logo/logo-icon-270x270.png"
        ></meta>

        <meta name="format-detection" content="telephone=no" />
      </head>

      <body className="antialiased">
        <LazyToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={false}
          className={'z-[99999] text-sm'}
        />
        <ReCaptchatProvider>
          <MetadataProvider value={metadata}>
            <NextIntlClientProvider messages={messages}>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
              >
                <GsapMatchMediaProvider>
                  <ScrollSmootherProvider>
                    <Loading />
                    <TheHeader />
                    <Suspense fallback={<LoadingComp />}>
                      {/* <BackToTop /> */}
                      {children}
                    </Suspense>
                    <TheFooter />
                  </ScrollSmootherProvider>
                </GsapMatchMediaProvider>
              </ThemeProvider>
            </NextIntlClientProvider>
          </MetadataProvider>
        </ReCaptchatProvider>
      </body>
    </html>
  );
}
