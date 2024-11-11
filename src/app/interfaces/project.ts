import { Teammate } from './teammate';
import { TypeProjectEnum } from '../enum/type-project-enum';

export interface Project {
  id: number;
  name: string;
  year: number;
  type: TypeProjectEnum;
  description: string;
  image: string;
  video?: string;
  team?: Teammate[];
}
