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
import type { ProfileLocale } from '@/features/profile/types';

type HeroSectionProps = {
  locale: ProfileLocale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  const { basicProfile, strengths, experiences, thinking, pageContent } =
    getProfileData(locale);
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
      id={pageContent.hero.id}
      className="relative scroll-mt-32 py-20 sm:py-24 lg:py-28"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_24rem]">
        <Reveal className="max-w-3xl">
          <header className="space-y-7 lg:space-y-9">
            <div className="space-y-5">
              <Badge
                variant="default"
                className="w-fit border-border/55 bg-background/70 text-foreground shadow-[0_14px_28px_-24px_hsl(var(--foreground)_/_0.1)]"
              >
                {basicProfile.role}
              </Badge>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5rem]">
                  {pageContent.hero.headingPrefix}{' '}
                  <span className="text-foreground/72 underline decoration-accent/14 decoration-[0.34rem] underline-offset-[0.16em]">
                    {firstName}
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {basicProfile.tagline}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild size="lg" className="min-w-[10.5rem] px-8">
                <a href={pageContent.hero.primaryAction.href}>
                  {pageContent.hero.primaryAction.label}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-w-[10.5rem] px-8"
              >
                <a href={pageContent.hero.secondaryAction.href}>
                  {pageContent.hero.secondaryAction.label}
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-border/50 bg-background/52 px-4 py-2 text-sm text-muted-foreground shadow-[0_18px_34px_-30px_hsl(var(--foreground)_/_0.1)] backdrop-blur-sm">
              <span className="font-medium text-foreground/82">
                {pageContent.hero.summaryItems[0]}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
              <span>{pageContent.hero.summaryItems[1]}</span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
              <span>{pageContent.hero.summaryItems[2]}</span>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {pageContent.hero.signalTitle}. {pageContent.hero.supportingText}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="overflow-hidden border-border/60 bg-card/64 shadow-[0_24px_54px_-40px_hsl(var(--foreground)_/_0.12)] lg:mt-2">
            <CardHeader className="border-b border-border/60 pb-5">
              <Badge variant="secondary" className="w-fit">
                {pageContent.hero.signalEyebrow}
              </Badge>
              <CardTitle className="text-lg">
                {pageContent.hero.signalTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-6 py-5 sm:px-7 sm:py-6">
              <StaggerList className="grid grid-cols-3 gap-3">
                {signal.map((item) => (
                  <StaggerListItem key={item.label} className="list-none">
                    <div className="rounded-[1.25rem] border border-border/60 bg-background/72 p-3 text-center shadow-[inset_0_1px_0_hsl(var(--background)_/_0.18)]">
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
                    className="list-none rounded-[1.25rem] border border-border/60 bg-background/72 px-4 py-3 text-sm leading-7 text-muted-foreground transition-colors duration-200 hover:border-accent/14 hover:bg-background/86 hover:text-foreground/84"
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
