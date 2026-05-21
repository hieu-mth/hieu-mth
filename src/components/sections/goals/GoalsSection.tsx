import { getProfileData } from '@/features/profile/services/profile.service';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function GoalsSection() {
  const { goals } = getProfileData();

  return (
    <Container>
      <SectionTitle title="What I'm Working Toward" />
      <ul>
        {goals.focus.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </Container>
  );
}
