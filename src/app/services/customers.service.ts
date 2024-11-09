import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { RegionEnum } from '../enum/region-enum';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  getProfessionals(): Customer[] {
    return [
      {
        name: 'Jean Dupont',
        jobTitle: 'Réalisateur',
        phone: '0123456789',
        email: 'jean.dupont@filmprod.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
        regions: [RegionEnum.REGION_BRE, RegionEnum.REGION_CVL],
      },
      {
        name: 'Marie Durand',
        jobTitle: 'Monteur vidéo',
        phone: '0987654321',
        email: 'marie.durand@poststudio.com',
        profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
        regions: [RegionEnum.REGION_BRE, RegionEnum.REGION_BFC],
      },
      {
        name: 'Luc Martin',
        jobTitle: 'Ingénieur du son',
        phone: '0345678912',
        email: 'luc.martin@soundworks.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
        regions: [RegionEnum.REGION_BRE, RegionEnum.REGION_20R],
      },
      {
        name: 'Jean Dupont',
        jobTitle: 'Réalisateur',
        phone: '0123456789',
        email: 'jean.dupont@filmprod.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
        regions: [RegionEnum.REGION_BRE, RegionEnum.REGION_GES],
      },
      {
        name: 'Marie Durand',
        jobTitle: 'Monteur vidéo',
        phone: '0987654321',
        email: 'marie.durand@poststudio.com',
        profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
        regions: [RegionEnum.REGION_IDF, RegionEnum.REGION_GLP],
      },
      {
        name: 'Luc Martin',
        jobTitle: 'Ingénieur du son',
        phone: '0345678912',
        email: 'luc.martin@soundworks.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
        regions: [RegionEnum.REGION_IDF, RegionEnum.REGION_GUF],
      },
      {
        name: 'Jean Dupont',
        jobTitle: 'Réalisateur',
        phone: '0123456789',
        email: 'jean.dupont@filmprod.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg',
        regions: [RegionEnum.REGION_IDF, RegionEnum.REGION_HDF],
      },
      {
        name: 'Marie Durand',
        jobTitle: 'Monteur vidéo',
        phone: '0987654321',
        email: 'marie.durand@poststudio.com',
        profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
        regions: [RegionEnum.REGION_IDF, RegionEnum.REGION_MTQ],
      },
      {
        name: 'Luc Martin',
        jobTitle: 'Ingénieur du son',
        phone: '0345678912',
        email: 'luc.martin@soundworks.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg',
        regions: [RegionEnum.REGION_ARA, RegionEnum.REGION_MYT],
      },
      {
        name: 'Jean Dupont',
        jobTitle: 'Réalisateur',
        phone: '0123456789',
        email: 'jean.dupont@filmprod.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg',
        regions: [RegionEnum.REGION_ARA, RegionEnum.REGION_NAQ],
      },
      {
        name: 'Marie Durand',
        jobTitle: 'Monteur vidéo',
        phone: '0987654321',
        email: 'marie.durand@poststudio.com',
        profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
        regions: [RegionEnum.REGION_ARA, RegionEnum.REGION_NOR],
      },
      {
        name: 'Luc Martin',
        jobTitle: 'Ingénieur du son',
        phone: '0345678912',
        email: 'luc.martin@soundworks.com',
        profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg',
        regions: [RegionEnum.REGION_ARA, RegionEnum.REGION_OCC],
      },
    ];
  }
}
