import { getProfileData } from '@/features/profile/services/profile.service';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export function ExperienceSection() {
  const { experiences } = getProfileData();

  return (
    <Container>
      <SectionTitle title="Experience" />
      {experiences.map((exp) => (
        <Card key={exp.title}>
          <h3>{exp.title}</h3>
          <p>{exp.role}</p>
          <ul>
            {exp.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Card>
      ))}
    </Container>
  );
}
