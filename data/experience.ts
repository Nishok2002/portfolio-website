export interface ExperienceItem {
  role: string;
  /** Company name */
  company: string;
  /** Time period of employment */
  period: string;
  /** Bullet points describing what you did */
  details: string[];
  /**
   * Path to a company logo image located in the public folder. If provided,
   * the logo will be displayed alongside the role and company name in the
   * experience section. Paths should start with a forward slash (e.g.
   * `/interviewdesk.png`).
   */
  logo?: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Data Engineer',
    company: 'StableCoupons Inc.',
    period: 'Jan 2025 – Present',
    details: [
      'Built an end-to-end AWS data pipeline with S3, Lambda, and PySpark to process 2 years of financial data under a Medallion Architecture.',
      'Automated incremental ingestion, validation, and backfill workflows with centralized logging and schema tracking',
      'Developed predictive analytics dashboards in Tableau to visualize stock trends and forecasting insights.',
    ],
    logo: '/stablecoupons.png',
  },
  {
    role: 'Data Engineer',
    company: 'JA ASSURE',
    period: 'Jun 2024 – Dec 2024',
    details: [
      'Built a RAG-based FAQ chatbot with Whisper AI, automating responses and reducing analyst workload.',
      'Engineered PDF-to-dataset extraction pipelines, improving model training efficiency by 50%',
      'Developed premium prediction models with XGBoost to optimize underwriting decisions',
    ],
    logo: '/jaassure.png',
  },
  {
    role: 'Business Intelligence Engineer',
    company: 'University of Maryland',
    period: 'Jan 2024 – Dec 2024',
    details: [
      'Led the migration of approval workflows from Qualtrics to Salesforce, saving 150+ staff hours per semester',
      'Designed ERDs, DFDs, and system specifications to enhance data accuracy and ERP integration',
      'Delivered process automation and documentation that reduced manual errors by over 30%',
    ],
    logo: '/umaryland.png',
  },
  {
    role: 'Data Engineer',
    company: 'InterviewDesk',
    period: 'Jan 2024 – Jul 2024',
    details: [
      'Developed data pipelines using Python, Django and Node.js to collect and process candidate data.',
      'Created dashboards and reports to track recruitment metrics and candidate engagement.',
      'Applied machine learning techniques to enhance candidate matching algorithms.',
    ],
    logo: '/interviewdesk.png',
  },
  {
    role: 'Business Intelligence Developer',
    company: 'WNS Global Services',
    period: 'Oct 2021 – May 2023',
    details: [
      'Analyzed large datasets to provide business insights for clients in various industries.',
      'Developed ETL processes and interactive dashboards to support decision making.',
      'Presented data‑driven recommendations to senior leadership.',
    ],
    logo: '/wns.png',
  },
  {
    role: 'Machine Learning Intern',
    company: 'Genik Technologies',
    period: 'Aug 2021 – Oct 2021',
    details: [
      'Developed CNN and YOLOv4 models for soil classification using ImageNet datasets',
      'Applied transfer learning with ResNet to enhance accuracy and optimize irrigation schedules',
      'Developed image classification models using Python and OpenCV.',
    ],
    logo: '/genik.png',
  },
];
