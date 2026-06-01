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

type StrengthsSectionProps = {
  locale: ProfileLocale;
};

export function StrengthsSection({ locale }: StrengthsSectionProps) {
  const { strengths, pageContent } = getProfileData(locale);

  return (
    <section
      id={pageContent.strengths.id}
      className="scroll-mt-32 border-t border-border/65 py-22 sm:py-24"
    >
      <Reveal className="max-w-2xl">
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="w-fit border-border/50 bg-background/52"
          >
            {pageContent.strengths.eyebrow}
          </Badge>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {pageContent.strengths.title}
            </h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              {pageContent.strengths.description}
            </p>
          </div>
        </div>
      </Reveal>
      <StaggerList className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {strengths.map((strength, index) => (
          <StaggerListItem key={strength} className="list-none">
            <Card className="group h-full border-border/60 bg-card/62 shadow-[0_22px_46px_-38px_hsl(var(--foreground)_/_0.1)] hover:-translate-y-1 hover:border-accent/18 hover:shadow-[0_28px_60px_-42px_hsl(var(--foreground)_/_0.12)]">
              <CardContent className="flex h-full flex-col gap-8 px-6 py-6 sm:gap-10 sm:px-7 sm:py-7">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="border-border/55 bg-background/55 text-foreground/72"
                  >
                    {pageContent.strengths.cardEyebrow}
                  </Badge>
                  <span className="text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="h-px w-12 bg-gradient-to-r from-accent/32 to-transparent" />
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {pageContent.strengths.itemTitlePrefix}{' '}
                    {String(index + 1).padStart(2, '0')}
                  </h3>
                  <p className="max-w-[30ch] text-base leading-8 text-muted-foreground">
                    {strength}
                  </p>
                </div>
              </CardContent>
            </Card>
          </StaggerListItem>
        ))}
      </StaggerList>
    </section>
  );
}
