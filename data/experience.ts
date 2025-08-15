export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Data Analyst',
    company: 'StableCoupons Inc.',
    period: 'Jan 2025 – Present',
    details: [
      'Built interactive dashboards using Tableau and Power BI to monitor marketing campaign performance.',
      'Designed and maintained Snowflake data warehouses to support enterprise analytics.',
      'Developed SQL and Python scripts to automate data collection and reporting processes.',
      'Collaborated with product and marketing teams to deliver data‑driven insights for decision making.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'JA ASSURE',
    period: 'Jun 2024 – Dec 2024',
    details: [
      'Built machine learning models for risk assessment and claims analysis.',
      'Performed model selection and hyper‑parameter tuning to improve predictive accuracy.',
      'Communicated analytical findings to stakeholders via dashboards and presentations.',
    ],
  },
  {
    role: 'Business Analyst Intern',
    company: 'University of Maryland',
    period: 'Jan 2024 – Dec 2024',
    details: [
      'Analyzed business processes and identified areas for improvement within academic departments.',
      'Created system requirements and technical specifications for new initiatives.',
      'Worked closely with faculty and administrators to streamline workflows and improve efficiency.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'InterviewDesk',
    period: 'Jan 2024 – Jul 2024',
    details: [
      'Developed data pipelines using Python, Django and Node.js to collect and process candidate data.',
      'Created dashboards and reports to track recruitment metrics and candidate engagement.',
      'Applied machine learning techniques to enhance candidate matching algorithms.',
    ],
  },
  {
    role: 'Business Data Analyst',
    company: 'WNS Global Services',
    period: 'Oct 2021 – May 2023',
    details: [
      'Analyzed large datasets to provide business insights for clients in various industries.',
      'Developed ETL processes and interactive dashboards to support decision making.',
      'Presented data‑driven recommendations to senior leadership.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Genik Technologies',
    period: 'Aug 2021 – Oct 2021',
    details: [
      'Worked on deep learning and computer vision projects using convolutional neural networks.',
      'Prepared and labeled datasets for model training and evaluation.',
      'Developed image classification models using Python and OpenCV.',
    ],
  },
];
