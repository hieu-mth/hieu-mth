'use client';

import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

import { cn } from '@/lib/utils';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: BaseProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerList({ children, className }: Omit<BaseProps, 'delay'>) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerVariants}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerListItem({
  children,
  className,
}: Omit<BaseProps, 'delay'>) {
  return (
    <motion.li variants={revealVariants} className={cn(className)}>
      {children}
    </motion.li>
  );
}
