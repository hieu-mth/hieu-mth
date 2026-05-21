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
      className="border-t border-neutral-900/80 py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-start">
        <Reveal className="max-w-sm">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              {pageContent.goals.eyebrow}
            </Badge>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-neutral-100">
                {pageContent.goals.title}
              </h2>
              <p className="text-base leading-relaxed text-neutral-400">
                {pageContent.goals.description}
              </p>
            </div>
          </div>
        </Reveal>
        <StaggerList className="space-y-4">
          {goals.focus.map((goal, index) => (
            <StaggerListItem key={goal} className="list-none">
              <Card className="border-neutral-800/80 bg-neutral-950/55 hover:border-neutral-700">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="mt-0.5 text-sm font-semibold text-neutral-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-relaxed text-neutral-300">
                    {goal}
                  </p>
                </CardContent>
              </Card>
            </StaggerListItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
