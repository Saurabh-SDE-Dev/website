export type ProjectCategory = 'AI/ML' | 'Cloud' | 'Backend';

export interface ProjectData {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  keyFeatures: string[];
  engineeringHighlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'Completed' | 'In Progress' | 'Archived';
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "ai-doc-intelligence",
    title: "AI Document Intelligence Platform",
    category: "AI/ML",
    shortDescription: "A scalable platform for extracting and classifying data from unstructured documents using AI and OCR.",
    problem: "Manual data entry from varied unstructured document formats is time-consuming, error-prone, and scales poorly for large organizations.",
    solution: "Developed an automated document processing pipeline leveraging machine learning models and OCR to instantly extract, classify, and structure data.",
    architecture: "Microservices architecture utilizing FastAPI for the backend API, Celery for asynchronous task processing, PostgreSQL for structured storage, and custom Python ML pipelines.",
    technologies: ["Python", "FastAPI", "OCR", "PostgreSQL", "Machine Learning", "Celery"],
    keyFeatures: [
      "Automated layout detection and text extraction",
      "Custom classification models for document routing",
      "High-throughput asynchronous processing API",
      "Role-Based Access Control (RBAC) for data security"
    ],
    engineeringHighlights: [
      "Optimized ML inference to handle concurrent document processing",
      "Architected robust microservices to isolate OCR workloads",
      "Implemented intelligent confidence scoring to flag low-accuracy extractions for human review"
    ],
    status: "Completed"
  },
  {
    id: "cloud-media-pipeline",
    title: "Cloud Media Processing Pipeline",
    category: "Cloud",
    shortDescription: "A robust, automated media transcoding and testing pipeline designed for modern OTT workflows.",
    problem: "Processing high-volume video and audio requires significant computational resources, and testing complex formats like Dolby Atmos is tedious.",
    solution: "Created an automated transcoding pipeline that utilizes cloud compute elasticity to process media efficiently and run automated quality checks.",
    architecture: "GCP Compute Engine instances orchestrated by custom scripts to manage FFmpeg transcoding, integrating with cloud storage and automated alerting systems.",
    technologies: ["GCP", "FFmpeg", "Python", "Media Transcoding", "Cloud Automation"],
    keyFeatures: [
      "Multi-codec video and audio transcoding",
      "Automated Dolby Atmos validation testing",
      "Dynamic compute scaling based on workload queue",
      "Automated status reporting and alerting"
    ],
    engineeringHighlights: [
      "Significantly reduced manual testing time for complex audio formats",
      "Engineered fault-tolerant transcoding scripts capable of resuming interrupted jobs",
      "Optimized compute resource utilization to reduce cloud costs"
    ],
    status: "Completed"
  },
  {
    id: "aws-dns-management",
    title: "AWS DNS Management Platform",
    category: "Backend",
    shortDescription: "An internal management tool offering a streamlined interface and access control for AWS Route 53 and EC2.",
    problem: "Providing direct AWS console access to non-DevOps team members poses security risks and lacks granular audit trails.",
    solution: "Developed a custom web application that acts as a secure proxy to AWS, allowing restricted teams to manage DNS records and instances.",
    architecture: "Django web backend interfacing with AWS services via Boto3, featuring a PostgreSQL database for audit logging and user management.",
    technologies: ["Django", "AWS Route 53", "Boto3", "EC2", "Python", "PostgreSQL"],
    keyFeatures: [
      "Simplified UI for DNS record management",
      "Granular Role-Based Access Control (RBAC)",
      "Comprehensive audit logging for all infrastructure changes",
      "Integration with existing SSO for authentication"
    ],
    engineeringHighlights: [
      "Safely exposed critical cloud infrastructure controls to authorized users",
      "Built resilient AWS API integration with proper error handling and rate limiting",
      "Created an immutable audit trail for compliance and tracking"
    ],
    status: "Completed"
  },
  {
    id: "ai-graphic-detection",
    title: "AI Graphic Detection System",
    category: "AI/ML",
    shortDescription: "A computer vision system designed to detect and flag specific graphics within live media streams.",
    problem: "Manually monitoring continuous media streams for specific graphical overlays or content is highly inefficient and prone to human error.",
    solution: "Trained and deployed a machine learning model using TensorFlow and OpenCV to automatically analyze frames and detect targeted graphics.",
    architecture: "A computer vision pipeline that ingests media streams, processes frames utilizing a CNN model, and outputs structured detection events to a monitoring dashboard.",
    technologies: ["TensorFlow", "OpenCV", "Python", "Computer Vision", "Datadog"],
    keyFeatures: [
      "Real-time frame extraction and analysis",
      "High-accuracy custom-trained detection models",
      "Integration with Datadog for production monitoring",
      "Automated alert generation upon detection"
    ],
    engineeringHighlights: [
      "Optimized model execution resulting in 30% faster processing in production",
      "Reduced manual review errors by 60% through automated flagging",
      "Implemented comprehensive model drift and accuracy tracking"
    ],
    status: "Completed"
  },
  {
    id: "airflow-cloud-automation",
    title: "Airflow Cloud Automation",
    category: "Cloud",
    shortDescription: "A centralized workflow orchestration system to manage data and infrastructure tasks.",
    problem: "Scattered cron jobs and standalone scripts led to fragmented infrastructure management and silent failures.",
    solution: "Implemented Apache Airflow to orchestrate cloud tasks, providing centralized scheduling, dependency management, and monitoring.",
    architecture: "Apache Airflow deployed on Kubernetes, utilizing custom operators to interact with GCP services and trigger complex DAGs.",
    technologies: ["Apache Airflow", "GCP", "Python", "Kubernetes", "CI/CD"],
    keyFeatures: [
      "Centralized DAGs for infrastructure maintenance",
      "Automated Slack and email alerts for workflow failures",
      "Visual workflow tracking and dependency management",
      "Automated retry mechanisms for transient errors"
    ],
    engineeringHighlights: [
      "Improved incident response times by 40% through centralized alerting",
      "Standardized workflow deployment via CI/CD pipelines",
      "Replaced fragile legacy scripts with robust, monitorable DAGs"
    ],
    status: "Completed"
  }
];
