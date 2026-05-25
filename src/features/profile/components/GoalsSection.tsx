import {
  Badge,
  Card,
  CardContent,
  Reveal,
  StaggerList,
  StaggerListItem,
} from '@/components/ui';
import { getProfileData } from '@/features/profile/services';

export function GoalsSection() {
  const { goals, pageContent } = getProfileData();

  return (
    <section
      id={pageContent.goals.id}
      className="scroll-mt-32 border-t border-border/80 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl space-y-12 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <div className="space-y-5">
            <Badge variant="secondary" className="w-fit">
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
              <Card className="hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_28px_70px_-42px_hsl(var(--accent)_/_0.18)]">
                <CardContent className="flex items-start gap-4 text-left sm:gap-5">
                  <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                    {goal}
                  </p>
                </CardContent>
              </Card>
            </StaggerListItem>
          ))}
        </StaggerList>
        <Reveal delay={0.08} className="mx-auto max-w-2xl">
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Always optimizing for clarity, maintainability, and the kind of
            frontend quality that feels dependable in real product teams.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
