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

export function ExperienceSection() {
  const { experiences, pageContent } = getProfileData();

  return (
    <section
      id={pageContent.experience.id}
      className="scroll-mt-32 border-t border-border/80 py-24 sm:py-28"
    >
      <Reveal className="max-w-2xl">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit">
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
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.5rem_minmax(0,1fr)]">
        <div className="relative hidden lg:block">
          <div className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-border" />
        </div>
        <StaggerList className="space-y-6">
          {experiences.map((experience, index) => (
            <StaggerListItem key={experience.title} className="list-none">
              <div className="grid gap-4 lg:grid-cols-[2.75rem_minmax(0,1fr)] lg:items-start">
                <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-muted-foreground shadow-[0_8px_24px_-18px_hsl(var(--foreground)_/_0.22)] lg:flex">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <Card className="overflow-hidden hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_28px_70px_-42px_hsl(var(--accent)_/_0.18)]">
                  <CardHeader className="gap-5 border-b border-border/80 pb-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="outline" className="text-foreground/72">
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
                  <CardContent className="space-y-5 sm:space-y-6">
                    <div className="flex flex-col gap-2 rounded-2xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-medium text-foreground/80">
                        Workstream {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{experience.highlights.length} focus areas</span>
                    </div>
                    <ul className="grid gap-3 md:grid-cols-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-2xl border border-border bg-background/72 px-4 py-4 text-sm leading-7 text-muted-foreground transition-colors duration-200 hover:border-accent/20 hover:bg-accent/5 hover:text-foreground/88"
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
