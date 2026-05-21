import { getProfileData } from '@/features/profile/services/profile.service';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function StrengthsSection() {
  const { strengths } = getProfileData();

  return (
    <Container>
      <SectionTitle title="What I Do Well" />
      <ul>
        {strengths.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Container>
  );
}
