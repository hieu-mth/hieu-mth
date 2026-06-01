'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { getProfileRoute } from '@/features/profile';
import type { ProfileLocale } from '@/features/profile/types';

type RedirectToDefaultLocaleProps = {
  locale: ProfileLocale;
  label: string;
};

export function RedirectToDefaultLocale({
  locale,
  label,
}: RedirectToDefaultLocaleProps) {
  const router = useRouter();
  const targetHref = getProfileRoute(locale);

  useEffect(() => {
    router.replace(targetHref);
  }, [router, targetHref]);

  return (
    <main className="flex min-h-[18vh] items-center justify-center px-5 text-center sm:px-6 lg:px-8">
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {label}{' '}
        <Link
          href={targetHref}
          className="font-semibold text-foreground underline decoration-border underline-offset-4"
        >
          {targetHref}
        </Link>
      </p>
    </main>
  );
}
