import {
  HeroSection,
  StrengthsSection,
  ThinkingSection,
  ExperienceSection,
  GoalsSection,
} from '@/features/profile';

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden pt-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,hsl(var(--accent)_/_0.14),transparent_46%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <HeroSection />
        <StrengthsSection />
        <ThinkingSection />
        <ExperienceSection />
        <GoalsSection />
      </div>
    </main>
  );
}
