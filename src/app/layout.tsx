import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { getProfileData } from '@/features/profile';

const { basicProfile } = getProfileData();
const siteUrl = 'https://hieu-mth.github.io/hieu-mth/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${basicProfile.name} | ${basicProfile.role}`,
  description: basicProfile.tagline,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${basicProfile.name} | ${basicProfile.role}`,
    description: basicProfile.tagline,
    siteName: basicProfile.name,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${basicProfile.name} | ${basicProfile.role}`,
    description: basicProfile.tagline,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
