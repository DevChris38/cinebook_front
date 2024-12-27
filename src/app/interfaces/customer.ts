import { Project } from './project';

export interface Customer {
  id: number;
  firstname: string;
  lastname: string;
  sexe: 'masculin' | 'feminin';
  jobTitle: string[];
  phone?: string;
  email: string;
  imgProfil: string;
  regions: string[];
  projets?: Project[];
  inscriptionDate: string;
  isPremium: boolean;
}

export interface DTOCustomerUpdate {
  id: number;
  firstname: string;
  lastname: string;
  sexe: 'masculin' | 'feminin';
  jobs: string[];
  phone?: string;
  email: string;
  imgProfil: string;
  regions: string[];
  projets?: Project[];
}

export interface DTOCustomerCreation {
  firstname: string | null;
  lastname: string | null;
  sexe: 'masculin' | 'feminin' | null;
  jobs: string[] | null;
  phone?: string | null;
  email: string | null;
  imgProfil: string | null;
  regions: string[] | null;
  projets?: Project[] | null;
}

export function mapDtoToCustomer(dto: any): Customer {
  return {
    id: dto.id,
    firstname: dto.firstname,
    lastname: dto.lastname,
    sexe: dto.sexe === 'MASC' || dto.sexe === 'FEM' ? dto.sexe : 'MASC', // Défaut à 'masculin'
    imgProfil: dto.imgProfil,
    phone: dto.phone || '',
    email: dto.email,
    inscriptionDate: dto.inscriptionDate,
    isPremium: dto.isPremium,
    jobTitle: dto.jobs,
    regions: dto.regions,
    projets: [], // Champs supplémentaires (à adapter selon besoin)
  };
}

export function mapCustomerToDTO(Customer: any): DTOCustomerUpdate {
  const dto: DTOCustomerUpdate = {
    id: Customer.id,
    firstname: Customer.firstname,
    lastname: Customer.lastname,
    sexe:
      Customer.sexe === 'MASC' || Customer.sexe === 'FEM'
        ? Customer.sexe
        : 'MASC', // Défaut à 'masculin'
    imgProfil: Customer.imgProfil,
    phone: Customer.phone || '',
    email: Customer.email,
    jobs: Customer.jobTitle,
    regions: Customer.regions,
    projets: [], // Champs supplémentaires (à adapter selon besoin)
  };
  console.log(dto);
  return dto;
}
