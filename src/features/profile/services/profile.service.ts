import { basicProfile } from '@/content/profile/basic';
import { strengths } from '@/content/profile/strengths';
import { thinking } from '@/content/profile/thinking';
import { experiences } from '@/content/profile/experience';
import { goals } from '@/content/profile/goals';

export function getProfileData() {
  return {
    basicProfile,
    strengths,
    thinking,
    experiences,
    goals
  };
}
