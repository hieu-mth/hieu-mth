'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/ui/Button';

type BackToTopProps = {
  label: string;
  ariaLabel: string;
};

export function BackToTop({ label, ariaLabel }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setIsVisible(window.scrollY > 560);
      setScrollProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const dashOffset =
    circumference - circumference * Math.min(scrollProgress, 1);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute -top-8 right-0 hidden whitespace-nowrap rounded-full bg-background/72 py-1.5 text-[11px] font-medium tracking-[0.02em] text-foreground/86 opacity-0 shadow-[0_16px_28px_-24px_hsl(var(--foreground)_/_0.12)] backdrop-blur-xl transition-opacity duration-200 group-hover:opacity-100 sm:block"
          >
            {label}
          </motion.div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            aria-label={ariaLabel}
            className="relative h-12 w-12 rounded-full border border-border/35 bg-background/58 shadow-[0_20px_36px_-26px_hsl(var(--foreground)_/_0.12)] backdrop-blur-xl hover:bg-background/72"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 40 40"
              className="absolute inset-0 h-full w-full -rotate-90"
            >
              <circle
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                strokeWidth="1"
                stroke="hsl(var(--border) / 0.45)"
              />
              <circle
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                strokeWidth="1.15"
                stroke="hsl(var(--foreground) / 0.22)"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="relative z-10 h-[1.4rem] w-[1.4rem]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="m6.75 10.25 5.25-5.25 5.25 5.25" />
            </svg>
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
