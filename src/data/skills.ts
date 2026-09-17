export interface Skill {
  label: string;
  icon?: string;
  iconType?: "iconify" | "local"; // iconify = Icon component, local = img from public/logos
}

export const domains: Skill[] = [
  { label: "Data Science" },
  { label: "Machine Learning" },
  { label: "Natural Language Processing (NLP)" },
  { label: "LLM Agents" },
  { label: "Retrieval Augmented Generation (RAG)" },
  { label: "Fine-tuning" },
  // { label: "Vector Search" },
  { label: "Prompt Engineering" },
  { label: "Statistiques" },
  // { label: "Séries Temporelles" },
  // { label: "Tests d'Hypothèses" },
  { label: "A/B Testing" },
  { label: "ETL" },
  { label: "Data Engineering" },
  { label: "Data pipelines" },
  { label: "MLOps" },
  // { label: "CI/CD" },
  // { label: "Agile" },
  { label: "Data Visualization" },
];

export const technologies: Skill[] = [
  { label: "Python", icon: "devicon:python" },
  { label: "R", icon: "devicon:r" },
  // { label: "Java", icon: "devicon:java" },
  { label: "SQL", icon: "devicon:mysql" },
  { label: "PL/SQL", icon: "devicon:oracle" },
  // { label: "Stata" },
  { label: "scikit-learn", icon: "devicon:scikitlearn" },
  { label: "NumPy", icon: "devicon:numpy" },
  { label: "Pandas", icon: "devicon:pandas" },
  { label: "Matplotlib", icon: "devicon:matplotlib" },
  { label: "Keras", icon: "devicon:keras" },
  // { label: "XGBoost" },
  { label: "TensorFlow", icon: "devicon:tensorflow" },
  { label: "PyTorch", icon: "devicon:pytorch" },
  {
    label: "Hugging Face Transformers",
    icon: "logos/huggingface-color.svg",
    iconType: "local",
  },
  { label: "LangChain", icon: "logos/langgraph-color.svg", iconType: "local" },
  { label: "LangGraph", icon: "logos/langgraph-color.svg", iconType: "local" },
  { label: "OpenAI API", icon: "simple-icons:openai" },
  { label: "Spark", icon: "devicon:apachespark" },
  { label: "Airflow", icon: "devicon:apacheairflow" },
  { label: "MLflow", icon: "simple-icons:mlflow" },
  { label: "AWS", icon: "devicon:amazonwebservices" },
  { label: "GCP", icon: "devicon:googlecloud" },
  { label: "Docker", icon: "devicon:docker" },
  { label: "Kubernetes", icon: "devicon:kubernetes" },
  { label: "PowerBI", icon: "logos/power-bi-icon.png", iconType: "local" },
  { label: "Streamlit", icon: "simple-icons:streamlit" },
  { label: "Grafana", icon: "simple-icons:grafana" },
  { label: "Talend", icon: "simple-icons:talend" },
  // { label: "Django", icon: "devicon:django" },
  { label: "FastAPI", icon: "devicon:fastapi" },
  { label: "Neo4j", icon: "devicon:neo4j" },
  { label: "Elasticsearch", icon: "devicon:elasticsearch" },
  // { label: "PostgreSQL", icon: "devicon:postgresql" },
  // { label: "MySQL", icon: "devicon:mysql" },
  // { label: "Kotlin", icon: "devicon:kotlin" },
  // { label: "Android", icon: "devicon:android" },
  { label: "Git", icon: "devicon:git" },
];

export const languages = [
  { flag: "\u{1F1EB}\u{1F1F7}", name: "French" },
  { flag: "\u{1F1EC}\u{1F1E7}", name: "English" },
];

export interface FeaturedCertification {
  text: string;
  badgeUrl?: string;
  certificateUrl?: string;
  badgeAlt?: string;
  textSize?: string;
}

export const featuredCertifications: FeaturedCertification[] = [];

export const publications: {
  title: string;
  journal: string;
  date: string;
  abstract: string;
  link: string;
}[] = [];
