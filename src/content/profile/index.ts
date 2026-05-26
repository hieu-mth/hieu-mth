import type {
  Experience,
  Goals,
  Profile,
  ProfilePageContent,
  Strength,
  ThinkingItem,
} from '@/features/profile/types';

export const basicProfile = {
  name: 'Mai Tran Huu Hieu',
  role: 'Senior Frontend Engineer',
  tagline:
    'Focused on scalable React systems, enterprise architecture, and developer productivity.',
} satisfies Profile;

export const strengths = [
  'Design scalable frontend architecture for enterprise systems',
  'Build reusable component & field systems',
  'Optimize rendering & application performance',
  'Lead code review & onboard developers',
  'Apply AI to improve development workflows',
] satisfies Strength[];

export const thinking = [
  {
    title: 'System Thinking',
    description: 'Focus on scalability, maintainability, and reuse',
  },
  {
    title: 'Problem Solving',
    description: 'Identify root causes and evaluate trade-offs',
  },
  {
    title: 'Code Quality',
    description: 'Prioritize readability and maintainability',
  },
  {
    title: 'Productivity',
    description: 'Leverage AI to improve workflows',
  },
] satisfies ThinkingItem[];

export const experiences = [
  {
    title: 'Enterprise React Platform',
    role: 'Tech SubLeader',
    highlights: [
      'Designed reusable systems',
      'Improved testing workflow',
      'Led onboarding',
    ],
  },
  {
    title: 'Dashboard System',
    role: 'Key Member',
    highlights: [
      'Built from scratch',
      'Designed architecture',
      'Optimized performance',
    ],
  },
] satisfies Experience[];

export const goals = {
  focus: [
    'Transition to product-level engineering',
    'Strengthen CS fundamentals',
    'Improve technical communication',
  ],
} satisfies Goals;

export const pageContent = {
  hero: {
    primaryAction: {
      label: 'Explore experience',
      href: '#experience',
    },
    secondaryAction: {
      label: 'View current goals',
      href: '#goals',
    },
    signalEyebrow: 'Profile signal',
    signalTitle: 'Scalable frontend systems',
    signalLabels: ['Strengths', 'Principles', 'Projects'],
  },
  strengths: {
    id: 'strengths',
    eyebrow: 'Strengths',
    title: 'Delivery systems with a product-grade finish.',
    description:
      'The focus is repeatable frontend architecture, maintainable systems, and execution quality that stays readable under scale.',
    cardEyebrow: 'Capability',
  },
  thinking: {
    id: 'thinking',
    eyebrow: 'Thinking',
    title: 'Principles for systems, trade-offs, and execution.',
    description:
      'The operating model stays pragmatic: identify the root cause, keep the path clear, and optimize for scale without adding friction.',
  },
  experience: {
    id: 'experience',
    eyebrow: 'Experience',
    title: 'Shipping foundations that teams can build on.',
    description:
      'Experience spans architecture, onboarding, performance, and shared systems that improve the speed and consistency of product delivery.',
    metaLabel: 'Selected work',
    cardDescription:
      'A concise track record of systems work, delivery quality, and practical leadership.',
  },
  goals: {
    id: 'goals',
    eyebrow: 'Goals',
    title: 'Focused growth, kept simple.',
    description:
      'The next stretch is centered on product ownership, stronger fundamentals, and sharper communication at technical depth.',
  },
  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    title: "Let's connect around product-grade frontend work.",
    description:
      'Open to conversations about scalable React systems, frontend architecture, and delivery quality for real product teams.',
    primaryAction: {
      label: 'Email Me',
      href: 'mailto:mthh.shun.1804@gmail.com',
    },
    secondaryAction: {
      label: 'GitHub Profile',
      href: 'https://github.com/hieu-mth',
    },
    tertiaryAction: {
      label: 'Project Source',
      href: 'https://github.com/hieu-mth/hieu-mth',
    },
  },
} satisfies ProfilePageContent;
