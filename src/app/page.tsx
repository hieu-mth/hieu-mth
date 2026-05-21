import { HeroSection } from '@/components/sections/hero/HeroSection';
import { StrengthsSection } from '@/components/sections/strengths/StrengthsSection';
import { ThinkingSection } from '@/components/sections/thinking/ThinkingSection';
import { ExperienceSection } from '@/components/sections/experience/ExperienceSection';
import { GoalsSection } from '@/components/sections/goals/GoalsSection';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <StrengthsSection />
      <ThinkingSection />
      <ExperienceSection />
      <GoalsSection />
    </main>
  );
}
