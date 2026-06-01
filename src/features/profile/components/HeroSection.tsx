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
  const { basicProfile, strengths, pageContent } = getProfileData(locale);
  const firstName = basicProfile.name.split(' ').at(-1) ?? basicProfile.name;
  const headingParts = pageContent.hero.headingPrefix.trim().split(/\s+/);
  const headingLead = headingParts.slice(0, -1).join(' ');
  const headingTail = headingParts.at(-1) ?? pageContent.hero.headingPrefix;

  return (
    <section
      id={pageContent.hero.id}
      className="relative isolate scroll-mt-32 pb-20 pt-14 sm:pb-24 sm:pt-16 lg:pb-24 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[-5rem] -z-10 hidden h-[24rem] bg-[radial-gradient(circle_at_top,hsl(var(--accent)_/_0.08),transparent_68%)] blur-3xl dark:block" />
      <div className="pointer-events-none absolute left-[-3rem] top-20 -z-10 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,hsl(var(--foreground)_/_0.05),transparent_68%)] blur-3xl dark:block" />
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.34fr)_minmax(23.75rem,26.75rem)] lg:gap-10 xl:grid-cols-[minmax(0,1.46fr)_minmax(24.75rem,27.75rem)] xl:gap-12">
        <Reveal className="max-w-[48rem]">
          <header className="space-y-7 lg:space-y-8">
            <div className="space-y-5">
              <Badge
                variant="default"
                className="w-fit border-border/55 bg-background/78 text-foreground shadow-[0_18px_32px_-26px_hsl(var(--foreground)_/_0.12)]"
              >
                {basicProfile.role}
              </Badge>
              <div className="space-y-5">
                <h1 className="max-w-[12ch] text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-foreground sm:max-w-[13ch] sm:text-6xl lg:max-w-[12ch] lg:text-[4.75rem] xl:text-[5rem]">
                  <span className="block">{headingLead}</span>
                  <span className="mt-2 block">
                    <span>{headingTail} </span>
                    <span className="relative inline-block text-foreground/78 underline decoration-accent/18 decoration-[0.34rem] underline-offset-[0.16em]">
                      {firstName}
                    </span>
                  </span>
                </h1>
                <p className="max-w-[32rem] text-lg leading-8 text-muted-foreground sm:text-[1.2rem] sm:leading-9 lg:max-w-[34rem]">
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
            <div className="max-w-[40rem] rounded-full border border-border/55 bg-background/48 px-5 py-3 shadow-[0_22px_48px_-40px_hsl(var(--foreground)_/_0.1)] backdrop-blur-sm sm:rounded-[1.75rem] sm:px-6 sm:py-4">
              <StaggerList className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
                {pageContent.hero.summaryItems.map((item) => (
                  <StaggerListItem
                    key={item}
                    className="list-none sm:flex-1 sm:px-4 sm:first:pl-0 sm:last:pr-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-border/45"
                  >
                    <p className="text-sm leading-7 text-foreground/72 sm:text-[0.95rem] sm:leading-6">
                      {item}
                    </p>
                  </StaggerListItem>
                ))}
              </StaggerList>
            </div>
            <p className="max-w-[34rem] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              <span className="font-medium text-foreground/80">
                {pageContent.hero.signalTitle}.
              </span>{' '}
              {pageContent.hero.supportingText}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="relative overflow-hidden border-border/60 bg-card/72 shadow-[0_28px_64px_-44px_hsl(var(--foreground)_/_0.16)]">
            <div className="pointer-events-none absolute inset-x-8 top-0 hidden h-24 bg-[radial-gradient(circle_at_top,hsl(var(--accent)_/_0.12),transparent_72%)] dark:block" />
            <CardHeader className="relative border-b border-border/60 pb-5">
              <Badge variant="secondary" className="w-fit">
                {pageContent.hero.signalEyebrow}
              </Badge>
              <CardTitle className="max-w-[24ch] text-lg leading-8 sm:text-[1.375rem]">
                {pageContent.hero.signalTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 px-5 py-5 sm:px-6 sm:py-6 lg:px-7">
              <StaggerList className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {pageContent.hero.signalItems.map((item) => (
                  <StaggerListItem key={item.label} className="list-none">
                    <div className="rounded-[1.25rem] border border-border/60 bg-background/78 px-3 py-4 text-center shadow-[inset_0_1px_0_hsl(var(--background)_/_0.18)]">
                      <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[10px] uppercase leading-4 tracking-[0.16em] text-muted-foreground sm:text-[11px] sm:tracking-[0.18em]">
                        {item.label}
                      </p>
                    </div>
                  </StaggerListItem>
                ))}
              </StaggerList>
              <StaggerList className="space-y-3.5">
                {strengths.slice(0, 3).map((strength) => (
                  <StaggerListItem
                    key={strength}
                    className="list-none rounded-[1.25rem] border border-border/60 bg-background/78 px-4 py-4 text-sm leading-6 text-muted-foreground transition-colors duration-200 hover:border-accent/14 hover:bg-background/88 hover:text-foreground/84 sm:px-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent/60" />
                      <span>{strength}</span>
                    </div>
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
