'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      className="group rounded-[1.5rem] border border-border/28 bg-background/20 p-0 text-foreground/78 shadow-[0_12px_22px_-22px_hsl(var(--foreground)_/_0.05)] hover:bg-background/34"
      aria-label={
        mounted
          ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
          : 'Toggle theme'
      }
      aria-pressed={mounted}
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[1.3rem]">
        <motion.span
          initial={false}
          animate={{
            rotate: mounted && theme === 'dark' ? 0 : 180,
            scale: mounted ? 1 : 0.92,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 rounded-[1.3rem] bg-gradient-to-b from-background/74 to-background/52"
        />
        <motion.span
          initial={false}
          animate={{
            opacity: mounted && theme === 'dark' ? 1 : 0,
            scale: mounted && theme === 'dark' ? 1 : 0.6,
            rotate: mounted && theme === 'dark' ? 0 : -20,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-foreground"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6.75 6.75 0 1 0 6.75 6.75A5.25 5.25 0 1 1 12 3Z" />
          </svg>
        </motion.span>
        <motion.span
          initial={false}
          animate={{
            opacity: mounted && theme === 'light' ? 1 : 0,
            scale: mounted && theme === 'light' ? 1 : 0.6,
            rotate: mounted && theme === 'light' ? 0 : 20,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-10 text-foreground"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2.25M12 19.25v2.25M21.5 12h-2.25M4.75 12H2.5M18.72 5.28l-1.6 1.6M6.88 17.12l-1.6 1.6M18.72 18.72l-1.6-1.6M6.88 6.88l-1.6-1.6" />
          </svg>
        </motion.span>
        <span className="sr-only">
          {mounted ? (theme === 'dark' ? 'Dark mode' : 'Light mode') : 'Theme'}
        </span>
      </span>
    </Button>
  );
}
