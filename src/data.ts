export interface Profession {
  code: string;
  display: string;
}

export interface Specialty {
  code: string;
  display: string;
}

export interface Category {
  display: string;
  profession: Profession;
  specialty?: Specialty;
}

export const categories: Category[] = [
  {
    display: "Cardiologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM04",
      display: "Cardiologie et Maladies vasculaires",
    },
  },
  {
    display: "Dermatologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM15",
      display: "Dermatologie et Vénéréologie",
    },
  },
  {
    display: "Endocrinologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM16",
      display: "Endocrinologie et Métabolisme",
    },
  },
  {
    display: "Gériatre",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM18",
      display: "Gériatrie",
    },
  },
  {
    display: "Gynécologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM19",
      display: "Gynécologie médicale",
    },
  },
  {
    display: "Gynécologue Obstétricien",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM20",
      display: "Gynécologie-obstétrique",
    },
  },
  {
    display: "Hématologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM21",
      display: "Hématologie",
    },
  },
  {
    display: "Gastro-entérologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM24",
      display: "Gastro-entérologie et Hépatologie",
    },
  },
  {
    display: "Néphrologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM30",
      display: "Néphrologie",
    },
  },
  {
    display: "Neuro-chirurgien",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM31",
      display: "Neuro-chirurgie",
    },
  },
  {
    display: "Neurologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM32",
      display: "Neurologie",
    },
  },
  {
    display: "Neuro-psychiatre",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM33",
      display: "Neuro-psychiatrie",
    },
  },
  {
    display: "ORL et Chirurgien cervico-faciale",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM34",
      display: "ORL et Chirurgie cervico-faciale",
    },
  },
  {
    display: "Oncologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM35",
      display: "Oncologie, option Onco-hématologie",
    },
  },
  {
    display: "Ophtalmologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM38",
      display: "Ophtalmologie",
    },
  },
  {
    display: "Oto-rhino-laryngologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM39",
      display: "Oto-rhino-laryngologie",
    },
  },
  {
    display: "Pédiatre",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM40",
      display: "Pédiatrie",
    },
  },
  {
    display: "Pneumologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM41",
      display: "Pneumologie",
    },
  },
  {
    display: "Psychiatre",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM42",
      display: "Psychiatrie",
    },
  },
  {
    display: "Psychiatre - enfant et adolescent",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM43",
      display: "Psychiatrie, option enfant et adolescent",
    },
  },
  {
    display: "Rhumatologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM48",
      display: "Rhumatologie",
    },
  },
  {
    display: "Stomatologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM50",
      display: "Stomatologie",
    },
  },
  {
    display: "Médecin généraliste",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM53",
      display: "Spécialiste en Médecine générale",
    },
  },
  {
    display: "Radiologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM55",
      display: "Radio-diagnostic et Radio-thérapie",
    },
  },
  {
    display: "Allergologue",
    profession: {
      code: "10",
      display: "Médecin",
    },
    specialty: {
      code: "SM57",
      display: "Allergologie",
    },
  },
  {
    display: "Chirurgien-Dentiste",
    profession: {
      code: "40",
      display: "Chirurgien-Dentiste",
    },
  },
  {
    display: "Sage-Femme",
    profession: {
      code: "50",
      display: "Sage-Femme",
    },
  },
  {
    display: "Infirmier",
    profession: {
      code: "60",
      display: "Infirmier",
    },
  },
  {
    display: "Masseur-Kinésithérapeute",
    profession: {
      code: "70",
      display: "Masseur-Kinésithérapeute",
    },
  },
  {
    display: "Pédicure-Podologue",
    profession: {
      code: "80",
      display: "Pédicure-Podologue",
    },
  },
];
