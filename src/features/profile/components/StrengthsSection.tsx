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
    <section className="border-t border-neutral-900/80 py-24">
      <Reveal className="max-w-2xl">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit">
            {pageContent.strengths.eyebrow}
          </Badge>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-neutral-100">
              {pageContent.strengths.title}
            </h2>
            <p className="text-base leading-relaxed text-neutral-400">
              {pageContent.strengths.description}
            </p>
          </div>
        </div>
      </Reveal>
      <StaggerList className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {strengths.map((strength, index) => (
          <StaggerListItem key={strength} className="list-none">
            <Card className="group h-full border-neutral-800/80 bg-neutral-950/65 hover:scale-[1.05] hover:border-neutral-600 hover:shadow-[0_32px_90px_-48px_rgba(255,255,255,0.35)]">
              <CardContent className="flex h-full flex-col gap-8 p-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-neutral-300">
                    {pageContent.strengths.cardEyebrow}
                  </Badge>
                  <span className="text-sm font-medium text-neutral-500 transition-colors duration-200 group-hover:text-neutral-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="max-w-[28ch] text-lg leading-relaxed text-neutral-200">
                  {strength}
                </p>
              </CardContent>
            </Card>
          </StaggerListItem>
        ))}
      </StaggerList>
    </section>
  );
}
