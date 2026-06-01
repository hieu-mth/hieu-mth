import './globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';

import { ProfileNavbar } from '@/features/profile';

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

const localeScript = `(() => {
  const segments = window.location.pathname.split('/').filter(Boolean);
  const locale = segments.find((segment) => segment === 'en' || segment === 'vi');
  document.documentElement.lang = locale ?? 'en';
})();`;

export const metadata: Metadata = {
  metadataBase: new URL('https://hieu-mth.github.io/hieu-mth/'),
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
        <Script
          id="locale-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: localeScript }}
        />
        <div className="relative min-h-screen">
          <ProfileNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
