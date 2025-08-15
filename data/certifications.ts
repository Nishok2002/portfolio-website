export interface CertificationItem {
  title: string;
  issuer: string;
  issued: string;
}

export const certifications: CertificationItem[] = [
  {
    title: 'Neo4j Certified Professional',
    issuer: 'Neo4j',
    issued: 'Feb 2025',
  },
  {
    title: 'Master of Science in Information Systems',
    issuer: 'University of Maryland',
    issued: 'Dec 2024',
  },
  {
    title: 'Introduction to Programming with MATLAB',
    issuer: 'Vanderbilt University',
    issued: 'Apr 2022',
  },
];
