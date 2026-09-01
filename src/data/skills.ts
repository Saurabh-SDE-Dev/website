export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  technologies: string[];
}

export const WHAT_I_BUILD = [
  {
    id: "backend",
    title: "BACKEND SYSTEMS",
    description: "Scalable APIs, microservices, backend services, authentication, authorization, and data-driven applications."
  },
  {
    id: "ai",
    title: "AI / ML",
    description: "Computer vision, OCR pipelines, machine-learning workflows, Generative AI, and LLM-powered applications."
  },
  {
    id: "cloud",
    title: "CLOUD & AUTOMATION",
    description: "AWS, GCP, containerized applications, CI/CD, workflow automation, and infrastructure-oriented engineering."
  },
  {
    id: "production",
    title: "PRODUCTION ENGINEERING",
    description: "Monitoring, observability, media processing, transcoding, and reliable production workflows."
  }
];

export const CORE_COMPETENCIES: SkillCategory[] = [
  {
    id: "backend",
    title: "BACKEND ENGINEERING",
    technologies: [
      "Python",
      "FastAPI",
      "Django",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
      "SQLAlchemy",
      "Alembic"
    ]
  },
  {
    id: "aiml",
    title: "AI / ML",
    technologies: [
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "OCR",
      "Computer Vision",
      "OpenCV",
      "TensorFlow"
    ]
  },
  {
    id: "cloud",
    title: "CLOUD & INFRASTRUCTURE",
    technologies: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions"
    ]
  },
  {
    id: "automation",
    title: "AUTOMATION & DATA",
    technologies: [
      "Apache Airflow",
      "Node-RED",
      "ETL Workflows",
      "Workflow Automation"
    ]
  },
  {
    id: "media",
    title: "MEDIA & OBSERVABILITY",
    technologies: [
      "FFmpeg",
      "Media Transcoding",
      "Dolby Atmos Testing",
      "Datadog"
    ]
  }
];
