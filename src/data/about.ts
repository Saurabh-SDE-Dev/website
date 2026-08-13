import { Server, Bot, Cloud, Database } from 'lucide-react';
import { FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiFastapi, SiDjango, SiPostgresql, SiGooglecloud, SiApacheairflow, SiKubernetes } from 'react-icons/si';

export const ABOUT_DATA = {
  paragraphs: [
    "I am a Software Development Engineer with a strong foundation in backend development, AI/ML integration, and cloud architecture. My expertise lies in designing robust REST APIs using Python frameworks like FastAPI and Django, and managing data at scale with PostgreSQL.",
    "Throughout my career, I have focused on automating complex workflows and deploying production-ready intelligent systems. By leveraging OCR and document processing models, I transform unstructured data into actionable insights.",
    "On the infrastructure side, I architect scalable, resilient solutions using AWS and GCP. I utilize Docker, Kubernetes, and Apache Airflow to orchestrate and deploy containerized applications, ensuring high availability and seamless monitoring and observability across all environments."
  ],
  skills: [
    { name: "Python", icon: FaPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Django", icon: SiDjango },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "AWS", icon: FaAws },
    { name: "GCP", icon: SiGooglecloud },
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Airflow", icon: SiApacheairflow }
  ],
  whatIBuild: [
    {
      title: "Backend Systems",
      description: "High-performance REST APIs and microservices utilizing FastAPI, Django, and PostgreSQL.",
      icon: Server
    },
    {
      title: "AI/ML Automation",
      description: "Integrating intelligent models, OCR, and document processing to automate complex tasks.",
      icon: Bot
    },
    {
      title: "Cloud Solutions",
      description: "Architecting scalable infrastructure on AWS and GCP with robust monitoring.",
      icon: Cloud
    },
    {
      title: "Data & Workflow Automation",
      description: "Orchestrating robust data pipelines and automated workflows with Apache Airflow.",
      icon: Database
    }
  ]
};
