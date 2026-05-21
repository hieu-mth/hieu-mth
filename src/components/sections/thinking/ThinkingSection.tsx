import { getProfileData } from '@/features/profile/services/profile.service';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export function ThinkingSection() {
  const { thinking } = getProfileData();

  return (
    <Container>
      <SectionTitle title="How I Think" />
      {thinking.map((item) => (
        <Card key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Card>
      ))}
    </Container>
  );
}
