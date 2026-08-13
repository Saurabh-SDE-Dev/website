export type ProjectCategory = 'AI/ML' | 'Cloud' | 'Backend';

export interface ProjectData {
  id: string;
  title: string;
  company: string;
  companyLabel: string;
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
  confidential?: boolean;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "autolex-insurance-automation",
    title: "AutoLex — Insurance Process Automation",
    company: "WDIPL",
    companyLabel: "Professional Experience — WDIPL",
    category: "Backend",
    shortDescription: "Insurance workflow automation platform using Python, FastAPI, OCR, AI-powered document extraction and PostgreSQL.",
    problem: "Manual processing of insurance documents is time-consuming, error-prone, and scales poorly for government-level operations.",
    solution: "Developed an automated document processing pipeline leveraging AI models, OCR, and structured microservices to streamline insurance workflows.",
    architecture: "Microservices architecture utilizing FastAPI for the backend API, PostgreSQL for structured storage, and custom AI/ML pipelines for document analysis.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "Microservices", "OCR", "AI Integration", "JWT", "RBAC"],
    keyFeatures: [
      "AI-powered document extraction and classification",
      "Role-Based Access Control with JWT authentication",
      "High-performance REST API design",
      "Structured data pipeline from unstructured documents"
    ],
    engineeringHighlights: [
      "Architected high-performance REST APIs to power complex insurance workflows",
      "Integrated advanced OCR capabilities for automated data extraction",
      "Designed and optimized relational database schemas using PostgreSQL",
      "Implemented secure authentication and RBAC mechanisms"
    ],
    status: "In Progress",
    confidential: true
  },
  {
    id: "klc-learning-platform",
    title: "KLC — Online Learning & Video Streaming",
    company: "WDIPL",
    companyLabel: "Professional Experience — WDIPL",
    category: "Cloud",
    shortDescription: "Online learning and video streaming platform with cloud-native video transcoding, CDN delivery, and secure content access.",
    problem: "Delivering high-quality video content at scale requires robust transcoding, secure storage, and efficient CDN delivery pipelines.",
    solution: "Built a cloud-native video processing and delivery system using AWS ECS/Fargate, FFmpeg, and CloudFront for scalable streaming.",
    architecture: "AWS ECS Fargate containers running FFmpeg transcoding workers, with S3 storage, CloudFront CDN, and pre-signed URL access control.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "AWS ECS", "AWS Fargate", "FFmpeg", "S3", "CloudFront", "RBAC"],
    keyFeatures: [
      "Multi-format video transcoding (H.264/H.265/AAC)",
      "Pre-signed URL-based secure content delivery",
      "CloudFront CDN integration for global distribution",
      "Role-based content access control"
    ],
    engineeringHighlights: [
      "Containerized transcoding workers on AWS ECS Fargate for elastic scaling",
      "Implemented secure video access via pre-signed URLs with expiration",
      "Optimized FFmpeg encoding profiles for quality-to-bandwidth ratio",
      "Built end-to-end content delivery pipeline from upload to streaming"
    ],
    status: "Completed"
  },
  {
    id: "ai-graphic-detection",
    title: "AI Graphic Detection System",
    company: "Skandha Media Services",
    companyLabel: "Professional Experience — Skandha Media Services",
    category: "AI/ML",
    shortDescription: "Computer vision system for detecting and flagging specific graphics within live media streams, reducing manual errors by 60%.",
    problem: "Manually monitoring continuous media streams for specific graphical overlays is highly inefficient and prone to human error.",
    solution: "Trained and deployed a machine learning model using TensorFlow and OpenCV to automatically analyze frames and detect targeted graphics.",
    architecture: "A computer vision pipeline that ingests media streams, processes frames using a CNN model, and outputs structured detection events to a monitoring dashboard.",
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
    id: "cloud-media-pipeline",
    title: "Cloud Media Processing Pipeline",
    company: "Skandha Media Services",
    companyLabel: "Professional Experience — Skandha Media Services",
    category: "Cloud",
    shortDescription: "Automated media transcoding and testing pipeline for OTT workflows including Dolby Atmos validation.",
    problem: "Processing high-volume video and audio requires significant computational resources, and testing complex formats like Dolby Atmos is tedious.",
    solution: "Created an automated transcoding pipeline utilizing cloud compute elasticity to process media efficiently and run automated quality checks.",
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
    title: "DNS Management Platform",
    company: "Skandha Media Services",
    companyLabel: "Professional Experience — Skandha Media Services",
    category: "Backend",
    shortDescription: "Internal management tool providing streamlined interface and access control for AWS Route 53 and EC2.",
    problem: "Providing direct AWS console access to non-DevOps team members poses security risks and lacks granular audit trails.",
    solution: "Developed a custom web application that acts as a secure proxy to AWS, allowing restricted teams to manage DNS records and instances.",
    architecture: "Django web backend interfacing with AWS services via Boto3, featuring a PostgreSQL database for audit logging and user management.",
    technologies: ["Django", "AWS Route 53", "Boto3", "EC2", "Python", "PostgreSQL", "RBAC"],
    keyFeatures: [
      "Simplified UI for DNS record management",
      "Granular Role-Based Access Control",
      "Comprehensive audit logging for all infrastructure changes",
      "Automated DNS provisioning"
    ],
    engineeringHighlights: [
      "Safely exposed critical cloud infrastructure controls to authorized users",
      "Built resilient AWS API integration with proper error handling and rate limiting",
      "Created an immutable audit trail for compliance and tracking"
    ],
    status: "Completed"
  },
  {
    id: "airflow-cloud-automation",
    title: "Airflow Cloud Automation",
    company: "Skandha Media Services",
    companyLabel: "Professional Experience — Skandha Media Services",
    category: "Cloud",
    shortDescription: "Centralized workflow orchestration system managing infrastructure tasks, reducing incident response time by 40%.",
    problem: "Scattered cron jobs and standalone scripts led to fragmented infrastructure management and silent failures.",
    solution: "Implemented Apache Airflow to orchestrate cloud tasks, providing centralized scheduling, dependency management, and monitoring.",
    architecture: "Apache Airflow orchestrating custom operators interacting with GCP services, triggering complex DAGs for infrastructure tasks.",
    technologies: ["Apache Airflow", "GCP", "Python", "Cloud Automation", "CI/CD"],
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
  },
  {
    id: "datadog-monitoring",
    title: "Datadog Monitoring Infrastructure",
    company: "Skandha Media Services",
    companyLabel: "Professional Experience — Skandha Media Services",
    category: "Backend",
    shortDescription: "Enterprise observability platform for CDN, video encoders, and REST APIs, reducing MTTR by 40%.",
    problem: "Lack of centralized monitoring led to slow detection of infrastructure issues and prolonged outages.",
    solution: "Configured comprehensive Datadog monitoring covering CDNs, video encoders, REST APIs with centralized logs, dashboards, and alerting.",
    architecture: "Datadog integrations collecting metrics from CDN, encoder, and API services, feeding into custom dashboards with automated alert routing.",
    technologies: ["Datadog", "Python", "REST APIs", "Log Collection", "Alerting"],
    keyFeatures: [
      "CDN and video encoder monitoring",
      "REST API performance tracking",
      "Centralized log collection and analysis",
      "Real-time dashboards and actionable alerts"
    ],
    engineeringHighlights: [
      "Reduced Mean Time To Resolution (MTTR) by 40%",
      "Designed custom log collection pipelines for diverse data sources",
      "Created dynamic dashboards enabling proactive issue detection"
    ],
    status: "Completed"
  }
];
