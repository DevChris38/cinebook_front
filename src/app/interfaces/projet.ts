import { Teammate } from './teammate';

export interface Projet {
  id: number;
  name: string;
  description: string;
  image: string;
  video: string | null;
  team: Teammate[];
}
