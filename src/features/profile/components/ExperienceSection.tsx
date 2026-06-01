import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Reveal,
  StaggerList,
  StaggerListItem,
} from '@/components/ui';
import { getProfileData } from '@/features/profile/services';
import type { ProfileLocale } from '@/features/profile/types';

type ExperienceSectionProps = {
  locale: ProfileLocale;
};

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  const { experiences, pageContent } = getProfileData(locale);

  return (
    <section
      id={pageContent.experience.id}
      className="scroll-mt-32 border-t border-border/65 py-22 sm:py-24"
    >
      <Reveal className="max-w-2xl">
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="w-fit border-border/50 bg-background/52"
          >
            {pageContent.experience.eyebrow}
          </Badge>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {pageContent.experience.title}
            </h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              {pageContent.experience.description}
            </p>
          </div>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.5rem_minmax(0,1fr)]">
        <div className="relative hidden lg:block">
          <div className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-border/70" />
        </div>
        <StaggerList className="space-y-6">
          {experiences.map((experience, index) => (
            <StaggerListItem key={experience.title} className="list-none">
              <div className="grid gap-4 lg:grid-cols-[2.75rem_minmax(0,1fr)] lg:items-start">
                <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/72 text-sm font-semibold text-muted-foreground shadow-[0_10px_24px_-20px_hsl(var(--foreground)_/_0.12)] lg:flex">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <Card className="overflow-hidden border-border/60 bg-card/62 shadow-[0_24px_52px_-40px_hsl(var(--foreground)_/_0.1)] hover:-translate-y-1 hover:border-accent/18 hover:shadow-[0_28px_60px_-42px_hsl(var(--foreground)_/_0.12)]">
                  <CardHeader className="gap-5 border-b border-border/60 pb-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge
                        variant="outline"
                        className="border-border/55 bg-background/55 text-foreground/72"
                      >
                        {experience.role}
                      </Badge>
                      <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        {pageContent.experience.metaLabel}
                      </span>
                    </div>
                    <CardTitle className="text-2xl sm:text-[1.75rem]">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="max-w-2xl text-base leading-7">
                      {pageContent.experience.cardDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5 px-6 py-5 sm:space-y-6 sm:px-7 sm:py-6">
                    <div className="flex flex-col gap-2 rounded-[1.2rem] border border-border/60 bg-background/58 px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-medium text-foreground/80">
                        {pageContent.experience.workstreamLabel}{' '}
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>
                        {experience.highlights.length}{' '}
                        {pageContent.experience.focusAreasLabel}
                      </span>
                    </div>
                    <ul className="grid gap-3 md:grid-cols-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-[1.2rem] border border-border/60 bg-background/72 px-4 py-4 text-sm leading-7 text-muted-foreground transition-colors duration-200 hover:border-accent/14 hover:bg-background/88 hover:text-foreground/88"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </StaggerListItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
