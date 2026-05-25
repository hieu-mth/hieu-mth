import {
  Badge,
  Card,
  CardContent,
  Reveal,
  StaggerList,
  StaggerListItem,
} from '@/components/ui';
import { getProfileData } from '@/features/profile/services';

export function StrengthsSection() {
  const { strengths, pageContent } = getProfileData();

  return (
    <section
      id={pageContent.strengths.id}
      className="scroll-mt-32 border-t border-border/80 py-24 sm:py-28"
    >
      <Reveal className="max-w-2xl">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit">
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
      <StaggerList className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {strengths.map((strength, index) => (
          <StaggerListItem key={strength} className="list-none">
            <Card className="group h-full hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_28px_70px_-42px_hsl(var(--accent)_/_0.22)]">
              <CardContent className="flex h-full flex-col gap-8 sm:gap-10">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-foreground/72">
                    {pageContent.strengths.cardEyebrow}
                  </Badge>
                  <span className="text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="h-px w-12 bg-gradient-to-r from-accent/55 to-transparent" />
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    Capability {String(index + 1).padStart(2, '0')}
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
