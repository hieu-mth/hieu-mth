import {
  Badge,
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

type ThinkingSectionProps = {
  locale: ProfileLocale;
};

export function ThinkingSection({ locale }: ThinkingSectionProps) {
  const { thinking, pageContent } = getProfileData(locale);

  return (
    <section
      id={pageContent.thinking.id}
      className="scroll-mt-32 border-t border-border/65 py-22 sm:py-24"
    >
      <Reveal className="grid gap-10 lg:grid-cols-[19rem_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="w-fit border-border/50 bg-background/52"
          >
            {pageContent.thinking.eyebrow}
          </Badge>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {pageContent.thinking.title}
            </h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              {pageContent.thinking.description}
            </p>
          </div>
        </div>
        <StaggerList className="space-y-5 border-l border-border/60 pl-6 sm:pl-8">
          {thinking.map((item, index) => (
            <StaggerListItem key={item.title} className="list-none">
              <Card className="relative overflow-visible border-border/55 bg-card/58 shadow-[0_22px_44px_-38px_hsl(var(--foreground)_/_0.08)] transition-all duration-300 hover:border-accent/14 hover:bg-card/68 hover:shadow-[0_24px_52px_-40px_hsl(var(--foreground)_/_0.1)]">
                <div className="absolute top-6 h-3.5 w-3.5 rounded-full border border-accent/18 bg-background shadow-[0_0_0_6px_hsl(var(--background))] sm:-left-[2.55rem] -left-[2rem]" />
                <CardHeader className="gap-4 pb-3">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="border-border/55 bg-background/55 text-foreground/72"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </Badge>
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {item.title}
                    </span>
                  </div>
                  <CardTitle className="text-2xl sm:text-[1.75rem]">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerListItem>
          ))}
        </StaggerList>
      </Reveal>
    </section>
  );
}
