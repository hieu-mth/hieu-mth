import type { Metadata } from 'next';

import { getProfileMetadata, ProfilePage } from '@/features/profile';

export function generateMetadata(): Metadata {
  return getProfileMetadata('en', '/en');
}

export default function EnglishProfilePage() {
  return <ProfilePage locale="en" />;
}
