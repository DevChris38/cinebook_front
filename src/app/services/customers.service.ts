import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { RegionEnum } from '../enum/region-enum';
import { JOB_DISPLAY } from '../enum/job-mapping';
import { JobsEnum } from '../enum/jobs-enum';
import { SexeEnum } from '../enum/sexe-enum';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  getProfessionals(): Customer[] {
    return [
      {
        id: 1,
        firstName: 'Jean',
        lastName: 'Dupont',
        sexe: SexeEnum.MASC,
        jobTitle: [JobsEnum.ACCESSOIRISTE],
        email: 'jean.dupont@filmprod.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
        regions: [RegionEnum.REGION_BRE, RegionEnum.REGION_CVL],
      },
      {
        id: 2,
        firstName: 'Marie',
        lastName: 'Durand',
        sexe: SexeEnum.FEM,
        jobTitle: [JobsEnum.ADM_PROD, JobsEnum.ASS_PROD],
        phone: '0987654321',
        email: 'marie.durand@poststudio.com',
        profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
        regions: [RegionEnum.REGION_BRE, RegionEnum.REGION_BFC],
      },
      {
        id: 3,
        firstName: 'Luc',
        lastName: 'Martin',
        sexe: SexeEnum.MASC,
        jobTitle: [JobsEnum.ACTEUR, JobsEnum.ANIMATEUR, JobsEnum.CASC],
        phone: '0345678912',
        email: 'luc.martin@soundworks.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
        regions: [RegionEnum.REGION_BRE, RegionEnum.REGION_20R],
      },
      {
        id: 4,
        firstName: 'Jean',
        lastName: 'Dupont',
        sexe: SexeEnum.MASC,
        jobTitle: [JobsEnum.ADM_PROD],
        phone: '0123456789',
        email: 'jean.dupont@filmprod.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
        regions: [RegionEnum.REGION_BRE, RegionEnum.REGION_GES],
      },
      {
        id: 5,
        firstName: 'Marie',
        lastName: 'Durand',
        sexe: SexeEnum.FEM,
        jobTitle: [
          JobsEnum.ACCESSOIRISTE,
          JobsEnum.CHEF_OPP,
          JobsEnum.COIF,
          JobsEnum.COST,
        ],
        phone: '0987654321',
        email: 'marie.durand@poststudio.com',
        profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
        regions: [RegionEnum.REGION_IDF, RegionEnum.REGION_GLP],
      },
      {
        id: 6,
        firstName: 'Luc',
        lastName: 'Martin',
        sexe: SexeEnum.MASC,
        jobTitle: [JobsEnum.ACCESSOIRISTE, JobsEnum.SON],
        phone: '0345678912',
        email: 'luc.martin@soundworks.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
        regions: [RegionEnum.REGION_IDF, RegionEnum.REGION_GUF],
      },
      {
        id: 7,
        firstName: 'Jean',
        lastName: 'Dupont',
        sexe: SexeEnum.MASC,
        jobTitle: [JobsEnum.ACTEUR],
        phone: '0123456789',
        email: 'jean.dupont@filmprod.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg',
        regions: [RegionEnum.REGION_IDF, RegionEnum.REGION_HDF],
      },
      {
        id: 8,
        firstName: 'Marie',
        lastName: 'Durand',
        sexe: SexeEnum.FEM,
        jobTitle: [JobsEnum.ACTEUR, JobsEnum.COST, JobsEnum.COIF],
        phone: '0987654321',
        email: 'marie.durand@poststudio.com',
        profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
        regions: [RegionEnum.REGION_IDF, RegionEnum.REGION_MTQ],
      },
      {
        id: 9,
        firstName: 'Luc',
        lastName: 'Martin',
        sexe: SexeEnum.MASC,
        jobTitle: [JobsEnum.ACCESSOIRISTE],
        phone: '0345678912',
        email: 'luc.martin@soundworks.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg',
        regions: [RegionEnum.REGION_ARA, RegionEnum.REGION_MYT],
      },
      {
        id: 10,
        firstName: 'Jean',
        lastName: 'Dupont',
        sexe: SexeEnum.MASC,
        jobTitle: [JobsEnum.ADM_PROD],
        phone: '0123456789',
        email: 'jean.dupont@filmprod.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg',
        regions: [RegionEnum.REGION_ARA, RegionEnum.REGION_NAQ],
      },
      {
        id: 11,
        firstName: 'Marie',
        lastName: 'Durand',
        sexe: SexeEnum.FEM,
        jobTitle: [JobsEnum.ADM_PROD, JobsEnum.CHAR_PROD],
        phone: '0987654321',
        email: 'marie.durand@poststudio.com',
        profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
        regions: [RegionEnum.REGION_ARA, RegionEnum.REGION_NOR],
      },
      {
        id: 12,
        firstName: 'Luc',
        lastName: 'Martin',
        sexe: SexeEnum.MASC,
        jobTitle: [JobsEnum.ACTEUR],
        phone: '0345678912',
        email: 'luc.martin@soundworks.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg',
        regions: [RegionEnum.REGION_ARA, RegionEnum.REGION_OCC],
      },
    ];
  }
}
