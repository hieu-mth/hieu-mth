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
  const firstName = basicProfile.name.split(' ').at(-1) ?? basicProfile.name;

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
    <section
      id="hero"
      className="relative scroll-mt-32 py-20 sm:py-24 lg:py-32"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_24rem]">
        <Reveal className="max-w-3xl">
          <header className="space-y-8 lg:space-y-10">
            <div className="space-y-5">
              <Badge variant="default" className="w-fit">
                {basicProfile.role}
              </Badge>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5rem]">
                  Hi, I&apos;m{' '}
                  <span className="text-foreground/70 underline decoration-accent/28 decoration-8 underline-offset-[0.18em]">
                    {firstName}
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {basicProfile.tagline}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={pageContent.hero.primaryAction.href}>View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={pageContent.hero.secondaryAction.href}>
                  Current Goals
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">
                Focused on product-grade frontend systems
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
              <span>Readable interfaces</span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
              <span>Scalable delivery</span>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {pageContent.hero.signalTitle}. Shipping readable systems,
              scalable interfaces, and product-minded frontend foundations.
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="overflow-hidden border-border/90 bg-card/78 lg:mt-3">
            <CardHeader className="border-b border-border/80 pb-5">
              <Badge variant="secondary" className="w-fit">
                {pageContent.hero.signalEyebrow}
              </Badge>
              <CardTitle className="text-lg">
                {pageContent.hero.signalTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <StaggerList className="grid grid-cols-3 gap-3">
                {signal.map((item) => (
                  <StaggerListItem key={item.label} className="list-none">
                    <div className="rounded-2xl border border-border/80 bg-background/70 p-3 text-center">
                      <p className="text-2xl font-semibold tracking-tight text-foreground">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
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
                    className="list-none rounded-2xl border border-border/80 bg-background/70 px-4 py-3 text-sm leading-7 text-muted-foreground transition-colors duration-200 hover:border-accent/20 hover:text-foreground/84"
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
