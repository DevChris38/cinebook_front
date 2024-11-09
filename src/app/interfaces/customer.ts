import { RegionEnum } from '../enum/region-enum';

export interface Customer {
  name: string;
  sexe: 'masculin' | 'feminin';
  jobTitle: string;
  phone: string;
  email: string;
  profilePicture: string;
  regions: string[];
}
