import { JobsEnum } from './jobs-enum';

export const JOB_DISPLAY: {
  [key in JobsEnum]: { masculin: string; feminin: string };
} = {
  [JobsEnum.ACTEUR]: { masculin: 'Acteur', feminin: 'Actrice' },
  [JobsEnum.ADM_PROD]: {
    masculin: 'Administrateur de production',
    feminin: 'Administratrice de production',
  },
  [JobsEnum.ACCESSOIRISTE]: {
    masculin: 'Accessoiriste',
    feminin: 'Accessoiriste',
  },
};
