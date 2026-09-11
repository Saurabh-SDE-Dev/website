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

export const PROFILE_DATA = {
  headline: "I engineer scalable backend systems, automate cloud infrastructure, and build intelligent AI-driven applications.",
  summary: "With a strong focus on Python, cloud platforms, and data pipelines, I specialize in designing and implementing robust APIs, deploying generative AI solutions, and automating complex workflows.",
  philosophy: "I believe in clean architecture, observable systems, and writing code that is as maintainable as it is performant."
};
