export const IMPACT_METRICS = [
  { value: 60, suffix: "%", label: "REDUCTION IN MANUAL REVIEW ERRORS" },
  { value: 30, suffix: "%", label: "FASTER ML INFERENCE" },
  { value: 40, suffix: "%", label: "FASTER INCIDENT RESPONSE" },
  { value: 40, suffix: "%", label: "MTTR IMPROVEMENT" }
];

export interface ArchNode {
  id: string;
  label: string;
  description: string;
  connections: string[];
}

export const ARCHITECTURE_NODES: ArchNode[] = [
  { id: "client", label: "CLIENT", description: "External consumers", connections: ["rest_api"] },
  { id: "rest_api", label: "REST API", description: "API Gateway", connections: ["backend"] },
  { id: "backend", label: "FASTAPI / DJANGO", description: "Core services", connections: ["db", "ai", "ocr"] },
  { id: "db", label: "POSTGRESQL", description: "Relational data", connections: ["services"] },
  { id: "ai", label: "AI / ML", description: "Intelligent processing", connections: ["llm"] },
  { id: "ocr", label: "OCR", description: "Document extraction", connections: ["llm"] },
  { id: "llm", label: "LLMs", description: "Generative AI", connections: ["services"] },
  { id: "services", label: "INTERNAL SERVICES", description: "Business logic", connections: ["aws", "gcp"] },
  { id: "aws", label: "AWS", description: "Cloud infrastructure", connections: ["datadog"] },
  { id: "gcp", label: "GCP", description: "Cloud infrastructure", connections: ["datadog"] },
  { id: "datadog", label: "DATADOG", description: "Observability", connections: [] }
];

export const TECHNICAL_PILLARS = [
  { id: "api", label: "API", technologies: ["FastAPI", "Django", "REST", "Microservices"] },
  { id: "data", label: "DATA", technologies: ["PostgreSQL", "MongoDB", "SQLAlchemy", "Alembic"] },
  { id: "ai", label: "AI", technologies: ["OCR", "Computer Vision", "TensorFlow", "Generative AI", "LLMs"] },
  { id: "cloud", label: "CLOUD", technologies: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Airflow"] },
  { id: "obs", label: "OBSERVABILITY", technologies: ["Datadog", "Monitoring", "Alerting"] }
];
