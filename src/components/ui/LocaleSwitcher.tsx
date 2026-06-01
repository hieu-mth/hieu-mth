'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  getProfileRoute,
  resolveProfileLocale,
} from '@/features/profile/services';
import type {
  LocaleSwitcherContent,
  ProfileLocale,
} from '@/features/profile/types';

type LocaleSwitcherProps = {
  currentLocale: ProfileLocale;
  copy: LocaleSwitcherContent;
};

export function LocaleSwitcher({ currentLocale, copy }: LocaleSwitcherProps) {
  return (
    <nav
      aria-label={copy.ariaLabel}
      className="inline-flex items-center gap-1 rounded-full border border-border/28 bg-background/20 p-1 shadow-[0_12px_22px_-22px_hsl(var(--foreground)_/_0.05)]"
    >
      {copy.options.map((option) => {
        const isActive = option.value === currentLocale;
        const href = getProfileRoute(resolveProfileLocale(option.value));

        return (
          <Link
            key={option.value}
            href={href}
            className={cn(
              'rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/86 transition-colors duration-200 sm:px-3 sm:text-[11px] sm:tracking-[0.18em]',
              'hover:text-foreground',
              isActive &&
                'bg-background/78 text-foreground shadow-[0_10px_20px_-20px_hsl(var(--foreground)_/_0.06)]',
            )}
          >
            <span className="sm:hidden">
              {option.shortLabel ?? option.label}
            </span>
            <span className="hidden sm:inline">{option.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
