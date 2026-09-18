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
    title: "Data & AI Intern",
    organization: "Levon Studio",
    dateRange: "February 2025 - July 2025",
    project:
      "Recommendation system and event-driven pipelines for Leyra, a multilingual flashcard-based learning app",
    description: [
      "Designed and built a content-based recommendation engine and an event-driven TTS pipeline for Leyra, deployed entirely on a serverless Google Cloud Platform architecture.",
    ],
    bullets: [
      "Built a daily recommendation workflow (scheduled Cloud Function) that queries BigQuery for users active in the past 24 hours, pulls their language preferences and learning history from Firestore, encodes a semantic user profile with Sentence-BERT (SBERT), and ranks content by cosine similarity against embedded topics and learnlists — writing the top results back to each user's homecontent sub-collection in Firestore for the mobile app to display.",
      "Mitigated the cold-start problem for new users with no history by introducing a popularity-based fallback strategy, and designed the pipeline with future A/B testing of recommendation variants (SBERT-only vs. popularity-boosted vs. hybrid) in mind.",
      "Built a modular Text-to-Speech pipeline (Coqui TTS / XTTS) with two modes: a batch scheduler for existing flashcards and a real-time Pub/Sub trigger for newly created ones, generating audio for ~95% of all existing flashcards across 7 languages, with new cards processed in 1-3 minutes.",
      "Solved recurring Cloud Function timeouts on large learnlists by redistributing the workload through Pub/Sub instead of a single HTTP-triggered function, and added worker-level batching, CPU inference, lazy model loading, and increased memory allocation to keep the 380MB XTTS model within execution limits.",
      "Designed the TTS wrapper to be provider-agnostic, so ElevenLabs or Amazon Polly could later be swapped in without changing the surrounding pipeline.",
      "Debugged IAM permission issues across BigQuery, Firestore, Pub/Sub, and Cloud Functions by configuring dedicated service accounts and precise role assignments (pubsub.editor, datastore.user, cloudfunctions.invoker).",
      "Built with Python, Google Cloud Functions, BigQuery, Firestore, Cloud Storage, Pub/Sub, SBERT, and Coqui TTS.",
    ],
  },
  {
    title: "Data Engineering Intern",
    organization: "Banque Nationale de Mauritanie (BNM)",
    dateRange: "July 2024 - September 2024",
    project:
      "Design and implementation of an ETL system for automating data pipelines into a centralized data warehouse",
    description: [
      "Designed and built a custom ETL tool for BNM to extract data from multiple OLTP banking systems (MySQL, SQL Server), apply business-specific transformation rules, and load the processed data into a centralized PostgreSQL data warehouse for reporting and decision-making.",
    ],
    bullets: [
      "Built the application in Django (learning the framework's MVT pattern, ORM, and templating from scratch in about two weeks) with Python scripts handling the core ETL logic — anonymization, cleaning, and normalization — to meet BNM's compliance and reporting requirements.",
      "Designed a flexible scheduling system supporting daily, weekly, monthly, and custom ETL runs. Initially evaluated Celery with Redis, but found it too heavy to set up and maintain within the project's timeframe, and switched to Python's lightweight 'schedule' library for a simpler, more reliable solution that supported both scheduled and manual runs.",
      "Built a Plotly dashboard to track the status and history of ETL executions, giving business teams visibility into pipeline runs without needing to read logs directly.",
      "Identified NoSQL sources and a more scalable warehouse (Snowflake or BigQuery, as alternatives to PostgreSQL) as directions for future iterations to better handle unstructured data and large-scale performance.",
      "Built with Python, Django, SQL, MySQL, SQL Server, PostgreSQL, and Plotly.",
    ],
  },
  {
    title: "Data Science Intern",
    organization:
      "Agence Nationale de la Statistique et de l'Analyse Démographique et Économique (ANSADE)",
    dateRange: "June 2022 - July 2022",
    project:
      "Statistical analysis of Mauritania's trade balance (2006-2021) across three presidential terms",
    description: [
      "Analyzed the evolution of Mauritania's imports, exports, and trade balance from 2006 to 2021 for the Department of Economic Studies and Outlook (DEEC), comparing performance across three presidential terms and presenting findings to non-technical stakeholders.",
    ],
    bullets: [
      "Ran descriptive statistics, PCA, and time-series visualizations in Stata and R to characterize the structure and evolution of the trade balance over 15 years.",
      "Ran hypothesis tests (t-tests) comparing the mean trade balance and the variance of imports/exports across presidential regimes, finding no statistically significant difference between the compared periods.",
      "Found that Mauritania's trade balance was structurally in deficit across all three regimes (with brief surpluses in 2006, 2008, 2011, and 2020), driven mainly by growing equipment imports (28% of imports), food products (27%), and petroleum products (22%), while exports were dominated by iron ore, fish, and (outside the most recent regime) crude oil.",
      "Identified a sharp one-year export drop from 80.7 billion to 17.6 billion MRU between 2013 and 2014, and the strongest export growth under the most recent regime studied, rising from 103.2 billion MRU in 2019 to 116.6 billion MRU in 2021.",
      "Delivered policy recommendations to government stakeholders aimed at reducing import dependency and increasing value-added exports to move the trade balance toward surplus.",
      "Built with Stata and R.",
    ],
  },
];
