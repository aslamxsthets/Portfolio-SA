import { ExperienceItem } from '../types';

const assetBaseUrl = import.meta.env.BASE_URL;

export const experienceData: ExperienceItem[] = [
  {
    id: "redynox",
    organization: "Redynox",
    domain: "Cybersecurity",
    role: "Cybersecurity",
    period: "Internship Engagement",
    description: "Cybersecurity-focused engagement with a practical emphasis on security workflows and technical investigation.",
    editableNotes: "",
    certificateUrl: `${assetBaseUrl}certificates/Redynox%20Certificate.png`
  },
  {
    id: "future-interns",
    organization: "Future Inters",
    domain: "Cybersecurity",
    role: "Cybersecurity",
    period: "Internship Engagement",
    description: "Cybersecurity-focused learning and practical experience across security analysis and digital protection workflows.",
    editableNotes: "",
    certificateUrl: `${assetBaseUrl}certificates/Future%20Interns%20Certificate.jpg`
  },
  {
    id: "shadow-fox",
    organization: "Shadow Fox",
    domain: "Cybersecurity",
    role: "Cybersecurity",
    period: "Internship Engagement",
    description: "Cybersecurity learning and hands-on exposure to defense and security-focused technical work.",
    editableNotes: "",
    certificateUrl: `${assetBaseUrl}certificates/ShadowFox%20Certificate.jpeg`
  }
];
