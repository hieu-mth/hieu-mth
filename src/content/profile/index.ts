import en from '@/content/profile/locales/en.json';
import vi from '@/content/profile/locales/vi.json';
import type { ProfileData, ProfileLocale } from '@/features/profile/types';

export const defaultProfileLocale: ProfileLocale = 'en';

export const profileContentByLocale = {
  en,
  vi,
} satisfies Record<ProfileLocale, ProfileData>;

export const profileLocales = Object.keys(
  profileContentByLocale,
) as ProfileLocale[];

export function getProfileContent(
  locale: ProfileLocale = defaultProfileLocale,
): ProfileData {
  return profileContentByLocale[locale] ?? profileContentByLocale.en;
}
