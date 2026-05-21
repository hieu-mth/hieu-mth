import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { getProfileData } from '@/features/profile';

const { basicProfile } = getProfileData();

export const metadata: Metadata = {
  title: `${basicProfile.name} | ${basicProfile.role}`,
  description: basicProfile.tagline,
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
