export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  link?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "autolex",
    number: "01",
    title: "AUTOLEX",
    category: "INSURANCE PROCESS AUTOMATION",
    description: "AI-powered insurance document processing and automation.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OCR",
      "AI / LLMs",
      "JWT",
      "RBAC"
    ],
    featured: true
  },
  {
    id: "graphical-detection",
    number: "02",
    title: "GRAPHICAL DETECTION SYSTEM",
    category: "AI / ML",
    description: "A computer-vision system focused on detecting graphical elements from visual input.",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow"
    ]
  },
  {
    id: "dns-management",
    number: "03",
    title: "DNS MANAGEMENT",
    category: "CLOUD / AUTOMATION",
    description: "DNS management and automation using AWS Route 53.",
    technologies: [
      "Python",
      "AWS Route 53"
    ]
  },
  {
    id: "cloud-automation",
    number: "04",
    title: "CLOUD AUTOMATION",
    category: "CLOUD / AUTOMATION",
    description: "Cloud automation workflows using Apache Airflow and GCP.",
    technologies: [
      "Apache Airflow",
      "GCP"
    ]
  },
  {
    id: "custom-transcoder",
    number: "05",
    title: "CUSTOM TRANSCODER",
    category: "MEDIA PROCESSING",
    description: "Custom transcoding workflows for media processing.",
    technologies: [
      "Python",
      "FFmpeg",
      "Media Transcoding",
      "Dolby Atmos Testing"
    ]
  },
  {
    id: "datadog-monitoring",
    number: "06",
    title: "DATADOG MONITORING",
    category: "OBSERVABILITY",
    description: "Monitoring and alerting workflows for production OTT systems.",
    technologies: [
      "Datadog"
    ]
  }
];
