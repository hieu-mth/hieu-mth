import { getProfileData } from '@/features/profile/services/profile.service';
import { Container } from '@/components/ui/Container';

export function HeroSection() {
  const { basicProfile } = getProfileData();

  return (
    <Container>
      <h1>{basicProfile.name}</h1>
      <h2>{basicProfile.role}</h2>
      <p>{basicProfile.tagline}</p>
    </Container>
  );
}
