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
    title: "Predictive Maintenance System",
    description:
      "Implementation of a research paper on predictive maintenance: a deep learning model predicts equipment failures from sensor data (96.5% accuracy), integrated into an MLOps pipeline that retrains automatically.",
    bullets: [
      "Added a knowledge graph and a RAG chatbot allowing technicians to query flagged machines.",
      "Built with Python, PyTorch, FastAPI, Docker, Neo4j, and LangChain.",
    ],
  },
  {
    title: "JobFit Agent",
    description:
      "A RAG application comparing resumes and job postings to identify matching, missing, and partially satisfied requirements, with a Streamlit dashboard.",
    bullets: [
      "Tested and compared several retrieval and prompting approaches to deploy the most accurate configuration.",
      "Built with Python, RAG, OpenAI API, Elasticsearch, PostgreSQL, Grafana, and Streamlit.",
    ],
  },
  {
    title: "SightSense",
    description:
      "An Android accessibility app for visually impaired users: banknote and object recognition, obstacle avoidance, and navigation with voice guidance and text reading.",
    bullets: [
      "Built with Kotlin, Android, YOLO, OCR, GPT-4o, Firebase, FastAPI, TensorFlow, and PyTorch.",
    ],
  },
];
