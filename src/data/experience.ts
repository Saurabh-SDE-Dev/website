export const EXPERIENCE_DATA = [
  {
    company: "WDIPL",
    role: "Software Developer (Python)",
    period: "Jan 2026 – Present",
    projects: [
      {
        name: "AutoLex — Insurance Process Automation (Government Client)",
        description: "Developing robust microservices for a large-scale, confidential government project utilizing Python and FastAPI.",
        highlights: [
          "Architected and implemented high-performance REST APIs to power insurance process automation workflows.",
          "Integrated advanced document processing and OCR capabilities for automated data extraction.",
          "Designed and optimized relational database schemas using PostgreSQL.",
          "Implemented secure authentication and Role-Based Access Control (RBAC) mechanisms.",
          "Leveraged AI-powered models to streamline document analysis and enhance operational efficiency."
        ],
        technologies: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "Microservices", "OCR", "AI Integration"]
      }
    ]
  },
  {
    company: "Skandha Media Services Pvt. Ltd.",
    role: "Software Development Engineer",
    period: "July 2023 – Jan 2026",
    projects: [
      {
        name: "Graphic Detection System",
        description: "Built and optimized machine learning models for detecting specific graphics in media streams.",
        highlights: [
          "Developed ML models using TensorFlow and OpenCV, reducing manual review errors by 60%.",
          "Optimized model execution, achieving a 30% faster execution time in production.",
          "Implemented comprehensive production monitoring to track model drift and accuracy."
        ],
        technologies: ["TensorFlow", "OpenCV", "Python", "ML Optimization"]
      },
      {
        name: "Cloud Automation & Orchestration",
        description: "Designed scalable, automated cloud workflows for media transcoding.",
        highlights: [
          "Automated complex media transcoding workflows on GCP using Apache Airflow and Compute Engine.",
          "Integrated automated Slack and email alerts, leading to a 40% improvement in incident response times."
        ],
        technologies: ["Apache Airflow", "GCP", "Compute Engine", "Automation"]
      },
      {
        name: "Datadog Monitoring Infrastructure",
        description: "Led the implementation of robust observability and monitoring solutions.",
        highlights: [
          "Configured Datadog to monitor CDNs, video encoders, and REST APIs.",
          "Designed custom log collection pipelines, dynamic dashboards, and actionable alerts.",
          "Reduced Mean Time To Resolution (MTTR) by 40% through enhanced observability."
        ],
        technologies: ["Datadog", "Monitoring", "Alerting", "Log Collection"]
      },
      {
        name: "DNS Management System",
        description: "Developed a comprehensive DNS management tool for cloud infrastructure.",
        highlights: [
          "Built a Django application leveraging Boto3 to manage AWS Route 53 and EC2 instances.",
          "Implemented strict Role-Based Access Control (RBAC) and detailed audit logging."
        ],
        technologies: ["Django", "AWS Route 53", "Boto3", "EC2", "RBAC"]
      },
      {
        name: "Custom Transcoder & Dolby Atmos Testing",
        description: "Engineered media processing solutions for OTT workflows.",
        highlights: [
          "Developed a custom multi-codec transcoding system tailored for OTT platforms.",
          "Implemented and automated Dolby Atmos testing within media processing pipelines."
        ],
        technologies: ["Media Processing", "FFmpeg", "Transcoding", "OTT Workflows"]
      }
    ]
  }
];
