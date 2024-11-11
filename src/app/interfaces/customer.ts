import { RegionEnum } from '../enum/region-enum';
import { Projet } from './projet';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  sexe: 'masculin' | 'feminin';
  jobTitle: string[];
  phone?: string;
  email: string;
  profilePicture: string;
  regions: string[];
  projets?: Projet[];
}
