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
  /**
   * Optional URL to open when this item is clicked.  If provided the item will
   * render as a link pointing to this URL.  The URL should start with `https://`.
   */
  link?: string;
  /**
   * Optional text to copy to the clipboard when this item is clicked.  This is
   * useful for credential codes that must be provided on a validation page.  When
   * present, the code will be copied just before navigating to the provided link.
   */
  clipboard?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: 'Neo4j Certified Professional',
    issuer: 'Neo4j',
    issued: 'Feb 2025',
    logo: '/neo4j.png',
    link: 'https://graphacademy.neo4j.com/c/45e5a677-728d-414e-84ec-ad93d928949b/',
  },
  {
    title: 'Master of Science in Information Systems',
    issuer: 'University of Maryland',
    issued: 'Dec 2024',
    logo: '/umaryland_logo.png',
    // This degree is validated via the university registrar.  Copy the
    // validation code to the clipboard and then navigate to the verification page.
    link: 'https://registrar.umd.edu/ceValidate.html',
    clipboard: '25AD-AXV6-NLNJ',
  },
  {
    title: 'Introduction to Programming with MATLAB',
    issuer: 'Vanderbilt University',
    issued: 'Apr 2022',
    logo: '/vanderbilt.png',
    link:
      'https://www.coursera.org/account/accomplishments/verify/ZD6QF9S77VFS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    title: 'Bachelor of Technology in Computer Science',
    issuer: 'SRM Institute of Science & Technology',
    issued: 'May 2023',
    logo: '/srm.png',
  },
];