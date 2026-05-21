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
    <section className="border-t border-neutral-900/80 py-24">
      <Reveal className="grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit">
            {pageContent.thinking.eyebrow}
          </Badge>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-neutral-100">
              {pageContent.thinking.title}
            </h2>
            <p className="text-base leading-relaxed text-neutral-400">
              {pageContent.thinking.description}
            </p>
          </div>
        </div>
        <StaggerList className="space-y-4">
          {thinking.map((item, index) => (
            <StaggerListItem key={item.title} className="list-none">
              <Card className="overflow-hidden border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700">
                <div className="grid gap-0 md:grid-cols-[88px_minmax(0,1fr)]">
                  <div className="flex items-center justify-center border-b border-neutral-800/80 bg-neutral-900/40 px-6 py-5 md:border-b-0 md:border-r">
                    <span className="text-2xl font-semibold tracking-tight text-neutral-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <CardHeader className="pb-3">
                      <Badge
                        variant="outline"
                        className="w-fit text-neutral-300"
                      >
                        {item.title}
                      </Badge>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </StaggerListItem>
          ))}
        </StaggerList>
      </Reveal>
    </section>
  );
}
