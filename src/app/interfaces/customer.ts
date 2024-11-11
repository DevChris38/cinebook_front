import { Project } from './project';

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
  projets?: Project[];
}
