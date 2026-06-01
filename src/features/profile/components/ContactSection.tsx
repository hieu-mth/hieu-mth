import { Badge, Button, Card, CardContent, Reveal } from '@/components/ui';
import { getProfileData } from '@/features/profile/services';
import type { ProfileLocale } from '@/features/profile/types';

type ContactActionItem = {
  label: string;
  href: string;
  variant: 'default' | 'outline';
};

type ContactSectionProps = {
  locale: ProfileLocale;
};

export function ContactSection({ locale }: ContactSectionProps) {
  const { basicProfile, pageContent } = getProfileData(locale);
  const contactActions = [
    {
      ...pageContent.contact.primaryAction,
      variant: 'default' as const,
    },
    {
      ...pageContent.contact.secondaryAction,
      variant: 'outline' as const,
    },
    pageContent.contact.tertiaryAction
      ? {
          ...pageContent.contact.tertiaryAction,
          variant: 'outline' as const,
        }
      : null,
  ].filter((action): action is ContactActionItem => action !== null);

  return (
    <section
      id={pageContent.contact.id}
      className="scroll-mt-32 border-t border-border/65 py-22 sm:py-28"
    >
      <div className="mx-auto max-w-4xl space-y-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="space-y-5">
            <Badge
              variant="secondary"
              className="w-fit border-border/50 bg-background/52"
            >
              {pageContent.contact.eyebrow}
            </Badge>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {pageContent.contact.title}
              </h2>
              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                {pageContent.contact.description}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="border-border/60 bg-card/62 shadow-[0_24px_52px_-40px_hsl(var(--foreground)_/_0.1)]">
            <CardContent className="space-y-8 px-6 py-6 sm:px-7 sm:py-7">
              <div className="space-y-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                  {basicProfile.name}
                </p>
                <div className="space-y-3">
                  <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {basicProfile.role}
                  </p>
                  <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    {basicProfile.tagline}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
                {contactActions.map((action) => {
                  const isExternal =
                    action.href.startsWith('http') ||
                    action.href.startsWith('mailto:');

                  return (
                    <Button
                      key={action.href}
                      asChild
                      variant={action.variant}
                      size="lg"
                      className="w-full min-w-0 px-8 sm:w-auto sm:min-w-[11rem]"
                    >
                      <a
                        href={action.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                      >
                        {action.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
