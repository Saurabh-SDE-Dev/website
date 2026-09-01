export interface Certification {
  id: string;
  title: string;
  provider: string;
}

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "aws-cp",
    title: "AWS CERTIFIED CLOUD PRACTITIONER",
    provider: "Amazon Web Services",
  },
  {
    id: "aws-dev",
    title: "AWS CERTIFIED DEVELOPER – ASSOCIATE",
    provider: "Amazon Web Services",
  },
  {
    id: "ibm-ai",
    title: "IBM AI ENGINEERING PROFESSIONAL CERTIFICATE",
    provider: "IBM",
  }
];
