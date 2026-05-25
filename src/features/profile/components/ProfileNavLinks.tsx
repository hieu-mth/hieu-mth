'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type NavigationItem = {
  label: string;
  href: `#${string}`;
};

type ProfileNavLinksProps = {
  items: NavigationItem[];
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
  activeClassName?: string;
};

export function ProfileNavLinks({
  items,
  className,
  itemClassName,
  ariaLabel = 'Section navigation',
  activeClassName,
}: ProfileNavLinksProps) {
  const [activeHref, setActiveHref] = useState<NavigationItem['href']>(
    items[0]?.href ?? '#hero',
  );

  useEffect(() => {
    const sections = items
      .map((item) => {
        const id = item.href.replace('#', '');

        return document.getElementById(id);
      })
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryB.intersectionRatio - entryA.intersectionRatio,
          );

        if (!visibleEntries.length) {
          return;
        }

        const nextId = visibleEntries[0].target.id;

        setActiveHref(`#${nextId}`);
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={className} aria-label={ariaLabel}>
      {items.map((item) => {
        const isActive = item.href === activeHref;

        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => setActiveHref(item.href)}
            className={cn(
              'relative rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              'hover:bg-foreground/5 hover:text-foreground',
              isActive && 'text-foreground',
              itemClassName,
              isActive && activeClassName,
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="profile-nav-active-pill"
                className="absolute inset-0 -z-10 rounded-xl bg-background shadow-[0_10px_24px_-18px_hsl(var(--foreground)_/_0.28),inset_0_0_0_1px_hsl(var(--border))]"
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative z-10">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
