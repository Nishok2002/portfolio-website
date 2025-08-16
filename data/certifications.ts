export interface CertificationItem {
  /**
   * The name of the certification or degree.
   */
  title: string;
  /**
   * The organization or institution that issued the credential.
   */
  issuer: string;
  /**
   * The date the certification or degree was awarded.
   */
  issued: string;
  /**
   * Path to the logo image shown alongside the certification or degree.  This should
   * be the relative path from the public folder prefixed with a leading slash,
   * e.g. `/neo4j.png`.  Rounded rectangle logos will be applied in the UI.
   */
  logo?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: 'Neo4j Certified Professional',
    issuer: 'Neo4j',
    issued: 'Feb 2025',
    logo: '/neo4j.png',
  },
  {
    title: 'Master of Science in Information Systems',
    issuer: 'University of Maryland',
    issued: 'Dec 2024',
    logo: '/umaryland_logo.png',
  },
  {
    title: 'Introduction to Programming with MATLAB',
    issuer: 'Vanderbilt University',
    issued: 'Apr 2022',
    logo: '/vanderbilt.png',
  },
  {
    title: 'Bachelor of Technology in Computer Science',
    issuer: 'SRM Institute of Science & Technology',
    issued: 'May 2023',
    logo: '/srm.png',
  },
];