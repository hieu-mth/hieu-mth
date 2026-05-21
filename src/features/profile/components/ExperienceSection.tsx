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
      className="border-t border-neutral-900/80 py-24"
    >
      <Reveal className="max-w-2xl">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit">
            {pageContent.experience.eyebrow}
          </Badge>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-neutral-100">
              {pageContent.experience.title}
            </h2>
            <p className="text-base leading-relaxed text-neutral-400">
              {pageContent.experience.description}
            </p>
          </div>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.25rem_minmax(0,1fr)]">
        <div className="relative hidden lg:block">
          <div className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-neutral-800" />
        </div>
        <StaggerList className="space-y-5">
          {experiences.map((experience, index) => (
            <StaggerListItem key={experience.title} className="list-none">
              <div className="grid gap-4 lg:grid-cols-[2.5rem_minmax(0,1fr)] lg:items-start">
                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-sm font-semibold text-neutral-400 lg:flex">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <Card className="overflow-hidden border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700">
                  <CardHeader className="border-b border-neutral-800/80 pb-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="outline" className="text-neutral-300">
                        {experience.role}
                      </Badge>
                      <span className="text-sm text-neutral-500">
                        {pageContent.experience.metaLabel}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">
                      {experience.title}
                    </CardTitle>
                    <CardDescription>
                      {pageContent.experience.cardDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="grid gap-3 md:grid-cols-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-2xl border border-neutral-800 bg-neutral-900/40 px-4 py-4 text-sm leading-relaxed text-neutral-300 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/60"
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
