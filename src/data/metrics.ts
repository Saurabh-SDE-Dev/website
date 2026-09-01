import type { Metric } from "@/types";

export const METRICS_DATA: Metric[] = [
  {
    value: 60,
    suffix: "%",
    label: "Reduction in Manual Review Errors",
    description: "Through automated AI-powered graphic detection",
    source: "Graphic Detection System",
  },
  {
    value: 30,
    suffix: "%",
    label: "Faster ML Inference",
    description: "Optimized model execution in production",
    source: "Graphic Detection System",
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster Incident Response",
    description: "Via centralized Airflow alerting and orchestration",
    source: "Cloud Automation",
  },
  {
    value: 40,
    suffix: "%",
    label: "MTTR Improvement",
    description: "Through comprehensive Datadog monitoring and dashboards",
    source: "Datadog Monitoring",
  },
];
