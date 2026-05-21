import {
  basicProfile,
  experiences,
  goals,
  pageContent,
  strengths,
  thinking,
} from '@/content/profile';
import type { ProfileData } from '@/features/profile/types';

export function getProfileData(): ProfileData {
  return {
    basicProfile,
    strengths,
    thinking,
    experiences,
    goals,
    pageContent,
  };
}
