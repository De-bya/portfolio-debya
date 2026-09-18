export interface EducationEntry {
  title: string;
  organization: string;
  organizationUrl?: string;
  logo?: string;
  dateRange: string;
  project?: string;
  description?: string[];
  bullets?: string[];
  bulletPrefix?: string;
}

export const educationEntries: EducationEntry[] = [
  {
    title: "Master's in Artificial Intelligence and Data Science",
    organization: "Université de Montpellier",
    organizationUrl:
      "https://formations.umontpellier.fr/fr/formations/master-XB/master-informatique-ME154/intelligence-artificielle-et-science-des-donnees-PR477/m2-intelligence-artificielle-et-science-des-donnees-KMAHNWXT.html",
    dateRange: "Sept. 2026 - July 2027",
    description: ["Montpellier, France."],
    bullets: [
      "Key courses: Advanced Machine Learning, Natural Language Processing (word/sentence semantics), Decision Support, Database & Knowledge Theory, Data Management Beyond SQL (NoSQL), Database Administration, Constraints.",
    ],
  },
  {
    title: "Engineering Degree in Data Engineering",
    organization:
      "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
    organizationUrl: "https://ensias.um5.ac.ma/page/g%C3%A9nie-de-la-data-gd",
    dateRange: "2023 - 2025",
    description: [
      "Rabat, Morocco. Joined via a double-degree partnership between ENSIAS and ESP (see below)",
    ],
    bullets: [
      "Key courses: Virtualization & Cloud Computing, Data Visualization, Geospatial Data Processing, Distributed Systems (Java, Kafka), IT Project Management, Data Management, Machine Learning, Big Data, Innovation Project.",
    ],
  },
  {
    title: "Engineering Degree in Statistics and Data Engineering",
    organization: "École Supérieure Polytechnique (ESP)",
    organizationUrl: "https://www.esp.mr/formation/sid",
    dateRange: "2021 - 2023",
    description: ["Nouakchott, Mauritania."],
    bullets: [
      "Key courses: Descriptive Statistics, Operations Research, Statistical Software (R), Data Science & Machine Learning, Statistical Learning, Macroeconomic Modeling, Time Series.",
    ],
  },
  {
    title: "Preparatory Classes for Engineering Schools (MPSI/MP)",
    organization:
      "IPGEI - Institut Préparatoire aux Grandes Écoles d'Ingénieurs",
    organizationUrl: "http://ipgei.mr/IMG/pdf/depliant_ipgei.pdf",
    dateRange: "2019 - 2021",
    description: ["Nouakchott, Mauritania."],
    bullets: [
      "Intensive 2-year track: 12h/week mathematics, 8h/week physics-chemistry, plus engineering sciences, French, English, Arabic, and computer science.",
      "Weekly written exams and oral exams (khôlles) to prepare for competitive entrance exams to engineering schools.",
    ],
  },
];
