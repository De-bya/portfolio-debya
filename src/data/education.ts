export interface educationEntry {
  title: string;
  organization: string;
  logo?: string;
  dateRange: string;
  project?: string;
  description?: string[];
  bullets?: string[];
  bulletPrefix?: string;
}

export const educationEntries: educationEntry[] = [
  {
    title: "Master en Science des Données et Intelligence Artificielle",
    organization: "Université de Montpellier",
    dateRange: "Sept. 2026 - Juillet 2027",
    description: [
      "Master 2 Data Science et Intelligence Artificielle, Montpellier, France.",
    ],
  },
  {
    title: "Diplôme d'Ingénieur d'État en Génie de la Data",
    organization: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
    dateRange: "2023 - 2025",
    description: ["Rabat, Maroc."],
  },
  {
    title: "Diplôme d'Ingénieur en Statistique et Ingénierie des Données",
    organization: "École Supérieure Polytechnique (ESP)",
    dateRange: "2021 - 2023",
    description: ["Nouakchott, Mauritanie."],
  },
  {
    title: "Classes Préparatoires aux Grandes Écoles d'Ingénieurs (MPSI/MP)",
    organization: "IPEGI - Institut Préparatoire aux Grandes Écoles d'Ingénieurs",
    dateRange: "2019 - 2021",
    description: ["Nouakchott, Mauritanie."],
  },
];
