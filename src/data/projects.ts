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
      "An end-to-end implementation of a research paper on predictive maintenance for smart manufacturing, combining a Temporal Fusion Transformer with automated hyperparameter tuning and a full MLOps pipeline.",
    bullets: [
      "A Temporal Fusion Transformer (TFT) predicts equipment failures from hydraulic sensor data with 96.5% accuracy, using attention to capture long-range dependencies across sensor readings.",
      "Hyperparameters are automatically tuned with Particle Swarm Optimization (PSO), reaching 99.4% validation accuracy during the search.",
      "Every experiment is tracked with MLflow (params, metrics, model artifacts), and CUSUM drift detection monitors predictions in production to flag when retraining is needed.",
      "Added a resilience layer (exponential backoff, SRE-style uptime monitoring, chaos engineering tests) and validated it against sensor dropout, noise injection, and network latency scenarios.",
      "Served through a FastAPI REST API with a live web dashboard, containerized with Docker and deployed via a GitHub Actions CI/CD pipeline.",
      "Built with Python, PyTorch, FastAPI, Docker, and MLflow.",
    ],
    githubUrl: "https://github.com/De-bya/predictive-maintenance-tft-pso",
  },
  {
    title: "JobFit Agent",
    description:
      "A multi-step RAG agent that analyzes how well a resume matches a job posting — not a generic keyword score, but a requirement-by-requirement breakdown of what's met, what's missing, and how severe each gap actually is. Built as the final project for DataTalksClub's LLM Zoomcamp.",
    bullets: [
      "The agent parses the job posting and resume into structured requirements/skills, then reasons through each requirement individually: retrieves relevant context from a skills knowledge base (ESCO + O*NET), classifies the gap severity (Met, Minor, Adjacent, Experience mismatch, Hard filter risk), and generates grounded rewrite suggestions without fabricating skills the candidate doesn't have.",
      "Compared 4 retrieval strategies (vector, BM25, hybrid, and an advanced HyDE + reranking pipeline) against a 53-question eval set, and 2 prompting strategies scored by an LLM-as-judge — selected hybrid search and a structured, retrieval-grounded prompt based on the results.",
      "Job postings are ingested via a dlt pipeline (JSearch API) into DuckDB; the knowledge base is indexed in Elasticsearch for hybrid BM25 + dense vector search.",
      "Built a Streamlit interface and a Grafana monitoring dashboard (7 panels: fit-score distribution, gap-severity breakdown, latency, feedback ratio) backed by Postgres logging — no resume text is ever persisted, only aggregate metrics.",
      "Fully containerized with Docker Compose (Elasticsearch, Postgres, Grafana, app).",
      "Built with Python, OpenAI API, Elasticsearch, PostgreSQL, Grafana, Streamlit, and Docker.",
    ],
    githubUrl: "https://github.com/De-bya/jobfit-agent",
  },
  {
    title: "SightSense",
    description:
      "A mobile accessibility app that helps visually impaired users navigate daily life independently, combining on-device computer vision with real-time voice interaction. Built as an innovation project at ENSIAS, informed by a field visit to OAPAM (Organisation Alaouite pour la Promotion des Aveugles du Maroc) and a user study with visually impaired participants.",
    bullets: [
      "Object detection (YOLOv8n on Open Images V7, 600 classes) and obstacle avoidance, using a trapezoidal detection zone that re-aligns in real time via the phone's gyroscope to track the user's vanishing point.",
      "Moroccan banknote recognition (20/50/100/200 MAD) with a custom YOLOv11 model, trained on a self-collected, hand-labeled dataset augmented from 800 to 4,000 images.",
      "Bilingual text reading (Arabic and French) via a self-hosted PaddleOCR API — chosen because standard on-device OCR libraries don't handle Arabic script well.",
      "A GPT-4o assistant for voice Q&A (Whisper transcription to GPT-4o to text-to-speech) and visual scene description from the camera feed.",
      "Turn-by-turn GPS navigation (Google Maps SDK, Directions and Places APIs) that can run alongside real-time obstacle detection.",
      "Freemium/premium tiers, Firebase authentication, and on-device inference via TensorFlow Lite.",
      "Built with Kotlin, Android, YOLOv8/YOLOv11, PaddleOCR, GPT-4o, TensorFlow Lite, Firebase, and Google Maps APIs.",
    ],
    websiteUrl:
      "https://drive.google.com/file/d/1-sQQ7uDNP34f3CI1joapCOv-itMAEVZ4/view?usp=sharing",
  },
];
