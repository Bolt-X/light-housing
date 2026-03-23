import { PROJECT_CONSTANTS } from '@/src/constants/project';
import { directusClientWithRest } from '@/src/lib/directus';
import { readSingleton } from '@directus/sdk';
import { Locale } from 'next-intl';
import { cleanTranslationsDeep } from '../utils/metadata';
import { fnGetBottomNavBySlug, fnGetTopNavBySlug } from '@/src/services/pages';

async function getSiteMetadata() {
  return directusClientWithRest.request(
    readSingleton('metadata', {
      fields: ['contact_information', 'header_script'],
    }),
  );
}

export async function fnGetMetadata(locale: Locale) {
  try {
    const [topNav, bottomNav, metadata] = await Promise.all([
      fnGetTopNavBySlug(PROJECT_CONSTANTS.NAV_MENU_SLUG),
      fnGetBottomNavBySlug(PROJECT_CONSTANTS.NAV_MENU_SLUG),
      getSiteMetadata(),
    ]);

    const top_nav_raw = Array.isArray(topNav) ? topNav[0]?.raw_content : null;
    const bottom_nav_raw = Array.isArray(bottomNav)
      ? bottomNav[0]?.raw_content
      : null;

    const cleanedTop = top_nav_raw
      ? cleanTranslationsDeep(top_nav_raw, locale)
      : [];
    const cleanedBottom = bottom_nav_raw
      ? cleanTranslationsDeep(bottom_nav_raw, locale)
      : [];

    return {
      contact_information: metadata?.contact_information ?? null,
      header_script: metadata?.header_script ?? null,
      ...metadata,
      top_navigation: cleanedTop,
      bottom_navigation: cleanedBottom,
    };
  } catch (error) {
    console.error('Error getting metadata:', error);
    return {
      top_navigation: [],
      bottom_navigation: [],
      contact_information: null,
      header_script: null,
    };
  }
}
