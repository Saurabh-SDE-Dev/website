export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  shortDescription: string;
  responsibilities: string[];
  technologies: string[];
  relatedWork: { label: string; href?: string }[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "wdipl",
    company: "WDIPL",
    role: "Software Developer (Python)",
    period: "January 2026 — Present",
    location: "Mumbai, India",
    shortDescription: "Architected and developed scalable Python and FastAPI microservices for document automation.",
    responsibilities: [
      "Architected and developed scalable Python and FastAPI microservices.",
      "Built RESTful APIs for document intake, validation, processing, and status tracking.",
      "Built OCR-based extraction pipelines.",
      "Optimized PostgreSQL schemas and indexing strategies.",
      "Implemented JWT authentication.",
      "Implemented role-based access control.",
      "Built AI-powered document extraction integrated with OCR pipelines.",
      "Extracted structured data from complex insurance PDFs."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OCR",
      "AI / LLMs",
      "REST APIs",
      "JWT",
      "RBAC"
    ],
    relatedWork: [
      { label: "AUTOLEX - Insurance Process Automation", href: "#autolex" }
    ]
  },
  {
    id: "skandha",
    company: "Skandha Media Services Pvt. Ltd.",
    role: "Software Development Engineer – I",
    period: "July 2023 — January 2026",
    location: "Mumbai, India",
    shortDescription: "Developed Python backend services, automation workflows, and media processing pipelines.",
    responsibilities: [
      "Developed Python backend services and automation workflows.",
      "Built REST APIs using Django REST Framework.",
      "Implemented role-based access control.",
      "Built cloud automation for AWS and GCP environments.",
      "Designed and integrated a custom transcoder.",
      "Worked on Dolby Atmos testing.",
      "Built monitoring and alerting workflows using Datadog.",
      "Worked with media processing and OTT workflows."
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Apache Airflow",
      "Datadog",
      "FFmpeg",
      "Node-RED"
    ],
    relatedWork: [
      { label: "GRAPHICAL DETECTION SYSTEM", href: "#graphical-detection" },
      { label: "DNS MANAGEMENT", href: "#dns-management" },
      { label: "CLOUD AUTOMATION", href: "#cloud-automation" },
      { label: "CUSTOM TRANSCODER", href: "#custom-transcoder" },
      { label: "DATADOG MONITORING", href: "#datadog-monitoring" }
    ]
  }
];

export const IMPACT_METRICS = [
  { value: "60%", label: "REDUCTION IN MANUAL REVIEW ERRORS" },
  { value: "30%", label: "FASTER ML INFERENCE" },
  { value: "40%", label: "FASTER INCIDENT RESPONSE" },
  { value: "40%", label: "MTTR IMPROVEMENT" }
];
