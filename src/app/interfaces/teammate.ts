import { JobsEnum } from '../enum/jobs-enum';

export interface Teammate {
  firstName: string;
  lastName: string;
  roles: JobsEnum[];
}
