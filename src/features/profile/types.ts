export type Profile = {
  name: string;
  role: string;
  tagline: string;
};

export type Strength = string;

export type CallToAction = {
  label: string;
  href: string;
};

export type ThinkingItem = {
  title: string;
  description: string;
};

export type Experience = {
  title: string;
  role: string;
  highlights: string[];
};

export type Goals = {
  focus: string[];
};

export type HeroContent = {
  primaryAction: CallToAction;
  secondaryAction: CallToAction;
  signalEyebrow: string;
  signalTitle: string;
  signalLabels: [string, string, string];
};

export type SectionContent = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type StrengthsContent = SectionContent & {
  cardEyebrow: string;
};

export type ExperienceContent = SectionContent & {
  metaLabel: string;
  cardDescription: string;
};

export type ContactContent = SectionContent & {
  primaryAction: CallToAction;
  secondaryAction: CallToAction;
  tertiaryAction?: CallToAction;
};

export type ProfilePageContent = {
  hero: HeroContent;
  strengths: StrengthsContent;
  thinking: SectionContent;
  experience: ExperienceContent;
  goals: SectionContent;
  contact: ContactContent;
};

export type ProfileData = {
  basicProfile: Profile;
  strengths: Strength[];
  thinking: ThinkingItem[];
  experiences: Experience[];
  goals: Goals;
  pageContent: ProfilePageContent;
};
