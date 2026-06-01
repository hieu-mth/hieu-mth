export type Profile = {
  name: string;
  role: string;
  tagline: string;
};

export type ProfileLocale = 'en' | 'vi';

export type Strength = string;

export type CallToAction = {
  label: string;
  href: string;
};

export type NavigationItem = {
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
  id: string;
  headingPrefix: string;
  primaryAction: CallToAction;
  secondaryAction: CallToAction;
  signalEyebrow: string;
  signalTitle: string;
  signalLabels: string[];
  summaryItems: string[];
  supportingText: string;
};

export type SectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type NavbarContent = {
  heroHref: string;
  brandEyebrow: string;
  navigationAriaLabel: string;
  items: NavigationItem[];
};

export type BackToTopContent = {
  label: string;
  ariaLabel: string;
};

export type RedirectContent = {
  label: string;
};

export type ThemeToggleContent = {
  toggleLabel: string;
  switchToLightLabel: string;
  switchToDarkLabel: string;
  lightModeLabel: string;
  darkModeLabel: string;
};

export type LocaleSwitcherOption = {
  value: string;
  label: string;
  shortLabel?: string;
};

export type LocaleSwitcherContent = {
  ariaLabel: string;
  options: LocaleSwitcherOption[];
};

export type UiContent = {
  backToTop: BackToTopContent;
  localeSwitcher: LocaleSwitcherContent;
  redirect: RedirectContent;
  themeToggle: ThemeToggleContent;
};

export type StrengthsContent = SectionContent & {
  cardEyebrow: string;
  itemTitlePrefix: string;
};

export type ExperienceContent = SectionContent & {
  metaLabel: string;
  cardDescription: string;
  workstreamLabel: string;
  focusAreasLabel: string;
};

export type GoalsContent = SectionContent & {
  closingNote: string;
};

export type ContactContent = SectionContent & {
  primaryAction: CallToAction;
  secondaryAction: CallToAction;
  tertiaryAction?: CallToAction;
};

export type ProfilePageContent = {
  navbar: NavbarContent;
  hero: HeroContent;
  strengths: StrengthsContent;
  thinking: SectionContent;
  experience: ExperienceContent;
  goals: GoalsContent;
  contact: ContactContent;
  ui: UiContent;
};

export type ProfileData = {
  basicProfile: Profile;
  strengths: Strength[];
  thinking: ThinkingItem[];
  experiences: Experience[];
  goals: Goals;
  pageContent: ProfilePageContent;
};
