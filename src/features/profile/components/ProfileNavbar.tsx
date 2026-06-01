'use client';

import type { MouseEvent } from 'react';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { LocaleSwitcher, ThemeToggle } from '@/components/ui';
import { ProfileNavLinks } from '@/features/profile/components/ProfileNavLinks';
import {
  getProfileData,
  resolveProfileLocale,
} from '@/features/profile/services';

export function ProfileNavbar() {
  const pathname = usePathname();
  const currentLocale = useMemo(
    () => resolveProfileLocale(pathname?.split('/').filter(Boolean)[0]),
    [pathname],
  );
  const { basicProfile, pageContent } = getProfileData(currentLocale);

  const handleHeroClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const heroId = pageContent.navbar.heroHref.replace('#', '');
    const heroSection = document.getElementById(heroId);

    if (!heroSection) {
      window.location.hash = heroId;

      return;
    }

    heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', pageContent.navbar.heroHref);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.2rem] border border-border/30 bg-background/46 px-3.5 py-2 shadow-[0_26px_52px_-38px_hsl(var(--foreground)_/_0.06)] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/40">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4">
            <a
              href={pageContent.navbar.heroHref}
              onClick={handleHeroClick}
              className="min-w-0 justify-self-start rounded-[1.45rem] px-4 py-2 transition-colors duration-300 hover:bg-background/28"
            >
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/90">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent/90 shadow-[0_0_8px_hsl(var(--accent)_/_0.2)]" />
                {pageContent.navbar.brandEyebrow}
              </span>
              <span className="mt-1 block truncate text-sm font-semibold tracking-[0.01em] text-foreground sm:text-[15px]">
                {basicProfile.name}
              </span>
            </a>
            <div className="hidden justify-center md:flex">
              <ProfileNavLinks
                items={pageContent.navbar.items}
                ariaLabel={pageContent.navbar.navigationAriaLabel}
                className="grid grid-flow-col gap-1"
                itemClassName="min-w-[7.25rem] text-center text-[13px]"
                activeClassName="text-foreground"
              />
            </div>
            <div className="flex items-center justify-end gap-2 md:justify-self-end">
              <LocaleSwitcher
                currentLocale={currentLocale}
                copy={pageContent.ui.localeSwitcher}
              />
              <ThemeToggle copy={pageContent.ui.themeToggle} />
            </div>
          </div>
          <ProfileNavLinks
            items={pageContent.navbar.items}
            ariaLabel={pageContent.navbar.navigationAriaLabel}
            className="mt-2 grid grid-cols-3 gap-1 md:hidden"
            itemClassName="min-w-0 px-2 py-1.5 text-center text-[13px]"
            activeClassName="text-foreground"
          />
        </div>
      </div>
    </header>
  );
}
