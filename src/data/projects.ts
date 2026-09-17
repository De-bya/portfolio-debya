export interface Project {
  title: string;
  date?: string;
  description: string;
  bullets?: string[];
  contributors?: string;
  githubUrl?: string;
  websiteUrl?: string;
  image?: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    title: "CROUS Watch",
    description:
      "A Python monitoring tool that watches the French CROUS student housing platform (trouverunlogement.lescrous.fr) for new listings and sends instant push notifications the moment one matching my criteria goes live.",
    bullets: [
      "Authenticates against the CROUS platform using a cookie-based session and polls listings in Montpellier, Nîmes, and Perpignan.",
      "Sends real-time push notifications via ntfy.sh so I could react within minutes of a room becoming available.",
      "This is the actual tool that got me my CROUS housing offer for my Master 2 year — without it, apartment hunting from abroad before arriving in France would have been a nightmare.",
    ],
    githubUrl: "https://github.com/De-bya/crous-watch",
  },
  {
    title: "Predictive Maintenance System",
    description:
      "An end-to-end implementation of a research paper on predictive maintenance, built to explore how deep learning and MLOps can work together in a production-like setting rather than a one-off notebook.",
    bullets: [
      "A deep learning model predicts equipment failures from sensor data with 96.5% accuracy.",
      "Integrated into an MLOps pipeline that automatically retrains the model as new sensor data comes in, keeping predictions accurate over time.",
      "Added a knowledge graph (Neo4j) and a RAG chatbot (LangChain) so technicians can ask natural-language questions about flagged machines instead of digging through dashboards.",
      "Built with Python, PyTorch, FastAPI, Docker, Neo4j, and LangChain.",
    ],
  },
  {
    title: "JobFit Agent",
    description:
      "A Retrieval-Augmented Generation application that compares a resume against a job posting and breaks down exactly where they match, where they fall short, and where they're only partially aligned — instead of a vague compatibility score.",
    bullets: [
      "Tested and compared several retrieval and prompting strategies to find the configuration that gave the most accurate, consistent comparisons.",
      "Built a Streamlit dashboard so results are readable at a glance rather than buried in raw model output.",
      "Built with Python, RAG, OpenAI API, Elasticsearch, PostgreSQL, Grafana, and Streamlit.",
    ],
  },
  {
    title: "SightSense",
    description:
      "An Android accessibility app designed to give visually impaired users more independence day-to-day, combining computer vision and voice guidance into a single mobile tool.",
    bullets: [
      "Recognizes banknotes and everyday objects in real time using YOLO and OCR.",
      "Helps users avoid obstacles and navigate their surroundings with voice-guided directions.",
      "Reads text aloud from the camera feed (signs, labels, documents) using GPT-4o.",
      "Built with Kotlin, Android, YOLO, OCR, GPT-4o, Firebase, FastAPI, TensorFlow, and PyTorch.",
    ],
  },
];