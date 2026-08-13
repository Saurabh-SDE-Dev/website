import { 
  Code2, 
  Server, 
  BrainCircuit, 
  Database, 
  Cloud, 
  Cog, 
  Activity, 
  Video 
} from 'lucide-react';

export const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C++"]
  },
  {
    title: "Backend/Web",
    icon: Server,
    skills: ["FastAPI", "Django", "REST APIs", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "AI/ML/Data",
    icon: BrainCircuit,
    skills: ["Pandas", "NumPy", "TensorFlow", "OpenCV", "OCR"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "SQL", "MongoDB"]
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "GCP", "EC2", "ECS", "Fargate", "S3", "CloudFront", "Route 53", "Boto3", "GCP Compute Engine", "GCP Transcoder", "GCP SDK"]
  },
  {
    title: "DevOps/Automation",
    icon: Cog,
    skills: ["Docker", "Kubernetes", "CI/CD", "Apache Airflow", "Node-RED"]
  },
  {
    title: "Monitoring",
    icon: Activity,
    skills: ["Datadog", "Logging", "Alerting"]
  },
  {
    title: "Media",
    icon: Video,
    skills: ["FFmpeg", "Transcoding"]
  }
];
