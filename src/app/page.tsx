import {
  HeroSection,
  StrengthsSection,
  ThinkingSection,
  ExperienceSection,
  GoalsSection,
} from '@/features/profile';

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden bg-neutral-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)]" />
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6">
        <HeroSection />
        <StrengthsSection />
        <ThinkingSection />
        <ExperienceSection />
        <GoalsSection />
      </div>
    </main>
  );
}
