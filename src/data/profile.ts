export interface ProfileDetail {
  label: string;
  value: string | string[];
}

export const PROFESSIONAL_DETAILS: ProfileDetail[] = [
  { label: "LOCATION", value: "Mumbai, India" },
  { label: "EXPERIENCE", value: "3+ Years" },
  { label: "ROLE", value: "Software Development Engineer" },
  { label: "FOCUS", value: ["Backend Engineering", "AI / ML", "Cloud", "Automation"] }
];
