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

export function ThinkingSection() {
  const { thinking, pageContent } = getProfileData();

  return (
    <section className="scroll-mt-32 border-t border-border/80 py-24 sm:py-28">
      <Reveal className="grid gap-10 lg:grid-cols-[19rem_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit">
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
        <StaggerList className="space-y-8 border-l border-border pl-6 sm:pl-8">
          {thinking.map((item, index) => (
            <StaggerListItem key={item.title} className="list-none">
              <Card className="relative overflow-visible border-transparent bg-transparent shadow-none">
                <div className="absolute -left-[2.15rem] top-6 h-3.5 w-3.5 rounded-full border border-accent/30 bg-background shadow-[0_0_0_6px_hsl(var(--background))] sm:-left-[2.65rem]" />
                <CardHeader className="gap-4 px-0 pb-3 pt-0">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">
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
                <CardContent className="px-0 pb-0">
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
