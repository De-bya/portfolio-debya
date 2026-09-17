export interface CareerEntry {
  title: string;
  organization: string;
  logo?: string;
  dateRange: string;
  project?: string;
  description?: string[];
  bullets?: string[];
  bulletPrefix?: string;
}

export const careerEntries: CareerEntry[] = [
  {
    title: "Stagiaire Data & IA",
    organization: "Levon Studio",
    dateRange: "Février 2025 - Juillet 2025",
    bullets: [
      "Conception, exploration et nettoyage de données puis développement d'un modèle prédictif de recommandation (embeddings SBERT, similarité cosinus) pour l'app de flashcards Leyra, déployé via un pipeline serverless GCP (Cloud Functions, BigQuery, Firestore).",
      "Développement d'un pipeline de données de synthèse vocale (Coqui TTS) modulaire avec déclencheurs Pub/Sub en mode batch et temps réel, générant l'audio de prononciation des flashcards dans 7 langues.",
    ],
  },
  {
    title: "Stagiaire Ingénierie des Données",
    organization: "Banque Nationale de Mauritanie (BNM)",
    dateRange: "Juillet 2024 - Septembre 2024",
    bullets: [
      "Conception et développement d'une application ETL sur mesure en Django (Python, SQL) pour extraire les données des systèmes OLTP MySQL et SQL Server, appliquer des règles de nettoyage, d'anonymisation et de normalisation, puis les charger dans un entrepôt de données PostgreSQL centralisé.",
      "Développement d'un moteur de planification flexible et d'un tableau de bord Plotly pour suivre l'état et l'historique des exécutions ETL, présenté aux équipes métier.",
    ],
  },
  {
    title: "Stagiaire Data Science",
    organization: "Agence Nationale de la Statistique et de l'Analyse Démographique et Économique (ANSADE)",
    dateRange: "Juin 2022 - Juillet 2022",
    bullets: [
      "Analyse de la balance commerciale de la Mauritanie (2006-2021) sous Stata et R, tests d'hypothèses (test t) et visualisations (PCA, séries temporelles) pour comparer les performances commerciales sur trois mandats présidentiels, restituées à des interlocuteurs non-techniques.",
    ],
  },
];
