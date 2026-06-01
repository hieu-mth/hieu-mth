import type { Metadata } from 'next';

import { getProfileMetadata, ProfilePage } from '@/features/profile';

export function generateMetadata(): Metadata {
  return getProfileMetadata('vi', '/vi');
}

export default function VietnameseProfilePage() {
  return <ProfilePage locale="vi" />;
}
