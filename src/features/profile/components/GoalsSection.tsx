import {
  Badge,
  Card,
  CardContent,
  Reveal,
  StaggerList,
  StaggerListItem,
} from '@/components/ui';
import { getProfileData } from '@/features/profile/services';
import type { ProfileLocale } from '@/features/profile/types';

type GoalsSectionProps = {
  locale: ProfileLocale;
};

export function GoalsSection({ locale }: GoalsSectionProps) {
  const { goals, pageContent } = getProfileData(locale);

  return (
    <section
      id={pageContent.goals.id}
      className="scroll-mt-32 border-t border-border/65 py-22 sm:py-28"
    >
      <div className="mx-auto max-w-3xl space-y-10 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <div className="space-y-5">
            <Badge
              variant="secondary"
              className="w-fit border-border/50 bg-background/52"
            >
              {pageContent.goals.eyebrow}
            </Badge>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {pageContent.goals.title}
              </h2>
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                {pageContent.goals.description}
              </p>
            </div>
          </div>
        </Reveal>
        <StaggerList className="space-y-4">
          {goals.focus.map((goal, index) => (
            <StaggerListItem key={goal} className="list-none">
              <Card className="border-border/60 bg-card/62 shadow-[0_24px_52px_-40px_hsl(var(--foreground)_/_0.1)] hover:-translate-y-1 hover:border-accent/18 hover:shadow-[0_28px_60px_-42px_hsl(var(--foreground)_/_0.12)]">
                <CardContent className="flex items-center gap-4 px-6 py-6 text-left sm:gap-5 sm:px-7 sm:py-7">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-border/60 bg-background/72 text-sm font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="flex-1 text-base leading-8 text-muted-foreground sm:text-lg">
                    {goal}
                  </p>
                </CardContent>
              </Card>
            </StaggerListItem>
          ))}
        </StaggerList>
        <Reveal delay={0.08} className="mx-auto max-w-2xl">
          <div className="rounded-full border border-border/50 bg-background/52 px-5 py-3 shadow-[0_18px_34px_-30px_hsl(var(--foreground)_/_0.08)]">
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              {pageContent.goals.closingNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
