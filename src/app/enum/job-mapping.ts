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
  [JobsEnum.ANIMATEUR]: {
    masculin: 'Animateur 2D/3D',
    feminin: 'Animatrice 2D/3D',
  },
  [JobsEnum.ASS_PROD]: {
    masculin: 'Assistant de production',
    feminin: 'Assistante de production',
  },
  [JobsEnum.ASS_MONTEUR]: {
    masculin: 'Assistant monteur',
    feminin: 'Assistante monteuse',
  },
  [JobsEnum.ASS_REAL]: {
    masculin: 'Assistant realisateur',
    feminin: 'Assistante realisatrice',
  },
  [JobsEnum.BRUIT]: {
    masculin: 'Bruiteur',
    feminin: 'Bruiteuse',
  },
  [JobsEnum.CADR]: {
    masculin: 'Cadreur',
    feminin: 'Cadreuse',
  },
  [JobsEnum.CANT]: {
    masculin: 'Cantinier',
    feminin: 'Cantiniere',
  },
  [JobsEnum.CASC]: {
    masculin: 'Cascadeur',
    feminin: 'Cascadeuse',
  },
  [JobsEnum.CHAR_PROD]: {
    masculin: 'Chargé de production',
    feminin: 'Chargée de production',
  },
  [JobsEnum.ELEC]: {
    masculin: 'Chef-electricien',
    feminin: 'Chef-electricienne',
  },
  [JobsEnum.MACH]: {
    masculin: 'Machiniste',
    feminin: 'Machiniste',
  },
  [JobsEnum.SON]: {
    masculin: 'Ingenieur du son',
    feminin: 'Ingenieure du son',
  },
  [JobsEnum.DIR_PHO]: {
    masculin: 'Directeur de la photographie',
    feminin: 'Directrice de la photographie',
  },
  [JobsEnum.CONS_TECH]: {
    masculin: 'Conseiller technique',
    feminin: 'Conseillere technique',
  },
  [JobsEnum.COIF]: {
    masculin: 'Coiffeur',
    feminin: 'Coiffeuse',
  },
  [JobsEnum.COOR_INTIM]: {
    masculin: "Coordinateur d'intimite",
    feminin: "Coordinatrice d'intimite",
  },
  [JobsEnum.COST]: {
    masculin: 'Costumier',
    feminin: 'Costumiere',
  },
  [JobsEnum.CHEF_OPP]: {
    masculin: 'Chef decorateur',
    feminin: 'Chef decoratrice',
  },
  [JobsEnum.DIAG]: {
    masculin: 'Dialoguiste',
    feminin: 'Dialoguiste',
  },
  [JobsEnum.DIR_ART]: {
    masculin: 'Directeur artistique',
    feminin: 'Directrice artistique',
  },
  [JobsEnum.DIR_CAST]: {
    masculin: 'Directeur de casting',
    feminin: 'Directrice de casting',
  },
  [JobsEnum.DIR_PROD]: {
    masculin: 'Directeur de production',
    feminin: 'Directrice de production',
  },
  [JobsEnum.DIR_POST_PROD]: {
    masculin: 'Directeur de postproduction',
    feminin: 'Directrice de postproduction',
  },
  [JobsEnum.DIR_TECH]: {
    masculin: 'Directeur technique',
    feminin: 'Directrice technique',
  },
  [JobsEnum.DISTRIB]: {
    masculin: 'Distributeur',
    feminin: 'Distributrice',
  },
  [JobsEnum.EDIT]: {
    masculin: 'Editeur DVD ou VOD',
    feminin: 'Editrice DVD ou VOD',
  } /*
  [JobsEnum.]: {
    masculin: '',
    feminin: '',
  },
  [JobsEnum.]: {
    masculin: '',
    feminin: '',
  },
  [JobsEnum.]: {
    masculin: '',
    feminin: '',
  },
  [JobsEnum.]: {
    masculin: '',
    feminin: '',
  }



  ETAL = 'Etalonneur / Etalonneuse',
  EXPLOIT = 'Exploitant(e) de salle de cinema',
  FIG = 'Figurant(e)',
  GROUP = 'Groupman / Groupwoman ou Groupiste',
  HAB = 'Habilleur / Habilleuse',
  INGE_VIS = 'Ingenieur(e) de la vision',
  MAQ = 'Maquilleur / Maquilleuse',
  MIX = 'Mixeur / Mixeuse',
  MONT = 'Monteur / Monteuse ou Chef-monteur / Chef-monteuse',
  MONT_SON = 'Monteur / Monteuse son',
  MUSI = 'Musicien(ne)',
  STEAD = 'Operateur / Operatrice steadicam ou steadicameur / Steadicameuse',
  PERCH = 'Perchman / Perchwoman',
  PHOTO = 'Photographe de plateau',
  ASSIST_OPE = 'Assistant(e) operateur / operatrice ou pointeur / pointeuse',
  PROD = 'Producteur / Productrice',
  PROJ = 'Projectionniste',
  REAL = 'Realisateur / Realisatrice',
  REG_GEN = 'Regisseur / Regisseuse general(e)',
  RESP_DOUBL = 'Responsable du doublage',
  RESP_TECH = 'Responsable technique',
  SCEN = 'Scenariste',
  SCRIPT = 'Scripte',
  TECH_MAINT = 'Technicien(ne) de maintenance',
  TRUC = 'Truqueur / Truqueuse',
  VENT = 'Ventouseur / Ventouseuse',
  VEND = 'Vendeur / Vendeuse international'*/,
};
