import type { Metadata } from 'next';

import {
  defaultProfileLocale,
  getProfileContent,
  profileLocales,
} from '@/content/profile';
import type { ProfileData, ProfileLocale } from '@/features/profile/types';

const siteUrl = 'https://hieu-mth.github.io/hieu-mth';

export function isProfileLocale(value?: string | null): value is ProfileLocale {
  return profileLocales.includes(value as ProfileLocale);
}

export function resolveProfileLocale(value?: string | null): ProfileLocale {
  return isProfileLocale(value) ? value : defaultProfileLocale;
}

export function getProfileRoute(locale: ProfileLocale): string {
  return `/${locale}`;
}

export function getProfileData(
  locale: ProfileLocale = defaultProfileLocale,
): ProfileData {
  return getProfileContent(locale);
}

export function getProfileMetadata(
  locale: ProfileLocale,
  pathname: string,
): Metadata {
  const { basicProfile } = getProfileData(locale);

  return {
    title: `${basicProfile.name} | ${basicProfile.role}`,
    description: basicProfile.tagline,
    alternates: {
      canonical: pathname,
      languages: {
        en: '/en',
        vi: '/vi',
        'x-default': '/en',
      },
    },
    openGraph: {
      title: `${basicProfile.name} | ${basicProfile.role}`,
      description: basicProfile.tagline,
      siteName: basicProfile.name,
      type: 'website',
      url: pathname,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${basicProfile.name} | ${basicProfile.role}`,
      description: basicProfile.tagline,
    },
    metadataBase: new URL(siteUrl),
  };
}
