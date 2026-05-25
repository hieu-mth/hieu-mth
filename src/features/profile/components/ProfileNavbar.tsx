import Link from 'next/link';

import { ThemeToggle } from '@/components/ui';
import { ProfileNavLinks } from '@/features/profile/components/ProfileNavLinks';

type ProfileNavbarProps = {
  name: string;
};

const navigation = [
  { label: 'Hero', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Goals', href: '#goals' },
] satisfies Array<{ label: string; href: `#${string}` }>;

export function ProfileNavbar({ name }: ProfileNavbarProps) {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.2rem] border border-border/40 bg-background/52 px-3 py-2 shadow-[0_24px_48px_-36px_hsl(var(--foreground)_/_0.07)] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/44">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <Link
              href="#hero"
              className="min-w-0 rounded-[1.35rem] px-3.5 py-2 transition-colors duration-300 hover:bg-background/34"
            >
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/90">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent/90 shadow-[0_0_8px_hsl(var(--accent)_/_0.2)]" />
                Frontend craft
              </span>
              <span className="mt-1 block truncate text-sm font-semibold tracking-[0.01em] text-foreground sm:text-[15px]">
                {name}
              </span>
            </Link>
            <div className="hidden flex-1 justify-center md:flex">
              <ProfileNavLinks
                items={navigation}
                className="grid grid-flow-col gap-1 rounded-[1.4rem] border border-border/35 bg-background/24 p-1"
                itemClassName="min-w-[6.75rem] text-center text-[13px]"
                activeClassName="text-foreground"
              />
            </div>
            <div className="flex items-center justify-end">
              <ThemeToggle />
            </div>
          </div>
          <ProfileNavLinks
            items={navigation}
            className="mt-2 grid grid-cols-3 gap-1 rounded-[1.35rem] border border-border/35 bg-background/24 p-1 md:hidden"
            itemClassName="min-w-0 px-2 py-1.5 text-center text-[13px]"
            activeClassName="text-foreground"
          />
        </div>
      </div>
    </header>
  );
}
