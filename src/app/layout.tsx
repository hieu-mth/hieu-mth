import './globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';

import { getProfileData, ProfileNavbar } from '@/features/profile';

const { basicProfile } = getProfileData();
const siteUrl = 'https://hieu-mth.github.io/hieu-mth/';
const themeScript = `(() => {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = window.localStorage.getItem(storageKey);
  const resolvedTheme = storedTheme === 'light' || storedTheme === 'dark'
    ? storedTheme
    : mediaQuery.matches
      ? 'dark'
      : 'light';

  root.classList.toggle('dark', resolvedTheme === 'dark');
})();`;

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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <div className="relative min-h-screen">
          <ProfileNavbar name={basicProfile.name} />
          {children}
        </div>
      </body>
    </html>
  );
}
