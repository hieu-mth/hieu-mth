import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Reveal,
  StaggerList,
  StaggerListItem,
} from '@/components/ui';
import { getProfileData } from '@/features/profile/services';

export function HeroSection() {
  const { basicProfile, strengths, experiences, thinking, pageContent } =
    getProfileData();

  const signal = [
    {
      label: pageContent.hero.signalLabels[0],
      value: String(strengths.length).padStart(2, '0'),
    },
    {
      label: pageContent.hero.signalLabels[1],
      value: String(thinking.length).padStart(2, '0'),
    },
    {
      label: pageContent.hero.signalLabels[2],
      value: String(experiences.length).padStart(2, '0'),
    },
  ];

  return (
    <section className="relative py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12">
        <Reveal className="max-w-3xl">
          <header className="space-y-8">
            <Badge
              variant="outline"
              className="w-fit border-neutral-700 text-neutral-300"
            >
              {basicProfile.role}
            </Badge>
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
                <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
                  {basicProfile.name}
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                {basicProfile.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={pageContent.hero.primaryAction.href}>
                  {pageContent.hero.primaryAction.label}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={pageContent.hero.secondaryAction.href}>
                  {pageContent.hero.secondaryAction.label}
                </a>
              </Button>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="overflow-hidden border-neutral-800/90 bg-neutral-950/75">
            <CardHeader className="border-b border-neutral-800/80 pb-5">
              <Badge variant="secondary" className="w-fit">
                {pageContent.hero.signalEyebrow}
              </Badge>
              <CardTitle className="text-lg">
                {pageContent.hero.signalTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <StaggerList className="grid grid-cols-3 gap-3">
                {signal.map((item) => (
                  <StaggerListItem key={item.label} className="list-none">
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-3 text-center">
                      <p className="text-2xl font-semibold tracking-tight text-neutral-100">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                        {item.label}
                      </p>
                    </div>
                  </StaggerListItem>
                ))}
              </StaggerList>
              <StaggerList className="space-y-3">
                {strengths.slice(0, 3).map((strength) => (
                  <StaggerListItem
                    key={strength}
                    className="list-none rounded-2xl border border-neutral-800/80 bg-neutral-900/30 px-4 py-3 text-sm leading-relaxed text-neutral-300"
                  >
                    {strength}
                  </StaggerListItem>
                ))}
              </StaggerList>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
