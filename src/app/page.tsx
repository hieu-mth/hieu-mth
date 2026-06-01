import type { Metadata } from 'next';

import { defaultProfileLocale } from '@/content/profile';
import { RedirectToDefaultLocale } from '@/app/RedirectToDefaultLocale';
import { getProfileData, getProfileMetadata } from '@/features/profile';

export function generateMetadata(): Metadata {
  const metadata = getProfileMetadata(defaultProfileLocale, '/en');

  return {
    ...metadata,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function Page() {
  const { pageContent } = getProfileData(defaultProfileLocale);

  return (
    <RedirectToDefaultLocale
      locale={defaultProfileLocale}
      label={pageContent.ui.redirect.label}
    />
  );
}
