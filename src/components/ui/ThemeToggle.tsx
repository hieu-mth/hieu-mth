'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/Button';

type Theme = 'light' | 'dark';

const storageKey = 'portfolio-theme';

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const initialTheme =
      storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : getSystemTheme();

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);

    if (storedTheme) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const nextTheme = getSystemTheme();
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="rounded-[1.15rem] border border-border/80 bg-muted/35 px-3 py-2 text-left text-xs font-medium text-foreground/80 hover:bg-muted/55 sm:min-w-[5.5rem]"
      aria-label={
        mounted
          ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
          : 'Toggle theme'
      }
      aria-pressed={mounted}
    >
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Mode
        </span>
        <span className="mt-1 flex items-center gap-2 text-[13px] font-semibold text-foreground">
          <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
          {mounted ? theme : 'Theme'}
        </span>
      </span>
    </Button>
  );
}
