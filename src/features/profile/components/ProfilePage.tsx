import { BackToTop } from '@/components/ui';
import { getProfileData } from '@/features/profile/services';
import type { ProfileLocale } from '@/features/profile/types';
import { ContactSection } from '@/features/profile/components/ContactSection';
import { ExperienceSection } from '@/features/profile/components/ExperienceSection';
import { GoalsSection } from '@/features/profile/components/GoalsSection';
import { HeroSection } from '@/features/profile/components/HeroSection';
import { StrengthsSection } from '@/features/profile/components/StrengthsSection';
import { ThinkingSection } from '@/features/profile/components/ThinkingSection';

type ProfilePageProps = {
  locale: ProfileLocale;
};

export function ProfilePage({ locale }: ProfilePageProps) {
  const { pageContent } = getProfileData(locale);

  return (
    <main className="relative isolate overflow-hidden pt-5">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top,hsl(var(--accent)_/_0.1),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <HeroSection locale={locale} />
        <StrengthsSection locale={locale} />
        <ThinkingSection locale={locale} />
        <ExperienceSection locale={locale} />
        <GoalsSection locale={locale} />
        <ContactSection locale={locale} />
      </div>
      <BackToTop
        label={pageContent.ui.backToTop.label}
        ariaLabel={pageContent.ui.backToTop.ariaLabel}
      />
    </main>
  );
}
