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
        <div className="rounded-[1.5rem] border border-border/70 bg-background/78 px-3 py-3 shadow-[0_16px_40px_-28px_hsl(var(--foreground)_/_0.24)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/68">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link
              href="#hero"
              className="min-w-0 rounded-xl px-2 py-1 transition-colors duration-200 hover:text-foreground/86"
            >
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)_/_0.45)]" />
                Available for product teams
              </span>
              <span className="mt-1 block truncate text-sm font-semibold tracking-[0.02em] text-foreground sm:text-[15px]">
                {name}
              </span>
            </Link>
            <div className="hidden flex-1 justify-center md:flex">
              <ProfileNavLinks
                items={navigation}
                className="grid grid-flow-col gap-1 rounded-[1.1rem] border border-border/70 bg-muted/30 p-1"
                itemClassName="min-w-[7rem] text-center text-[13px]"
                activeClassName="text-foreground"
              />
            </div>
            <div className="flex items-center justify-end">
              <ThemeToggle />
            </div>
          </div>
          <ProfileNavLinks
            items={navigation}
            className="mt-3 grid grid-cols-3 gap-1 rounded-[1.1rem] border border-border/70 bg-muted/30 p-1 md:hidden"
            itemClassName="min-w-0 px-2 py-2 text-center text-[13px]"
            activeClassName="text-foreground"
          />
        </div>
      </div>
    </header>
  );
}
