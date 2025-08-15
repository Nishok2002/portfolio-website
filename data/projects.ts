export interface ProjectItem {
  title: string;
  period: string;
  description: string[];
  skills: string[];
}

export const projects: ProjectItem[] = [
  {
    title:
      'Capstone Project for Extended Studies Department, University of Maryland',
    period: 'Jan 2024 – Dec 2024',
    description: [
      'Automated the course renewal request process for faculty using Salesforce, addressing a 30 % increase in request volume and reducing processing time by 40 % in the first quarter.',
      'Led system analysis by creating Data Flow Diagrams (DFD) and Entity Relationship Diagrams (ERD) to map data processes, improving data accuracy by 25 % and enabling the system to handle all requests.',
      'Produced detailed system specifications and Salesforce integration strategies, reducing processing errors by 30 % and doubling request handling capacity.',
      'Implemented a new information system on time with 100 % of requirements met, increasing faculty satisfaction scores by 20 %.',
    ],
    skills: ['Scrum', 'Kanban', 'Jira', 'Salesforce', 'System Analysis'],
  },
  {
    title: 'Video Games Sales & Success Prediction using PySpark',
    period: 'Jan 2024 – Mar 2024',
    description: [
      'Executed comprehensive feature engineering on Steam video game data for predictive modeling.',
      'Developed a predictive model with 81 % accuracy using Random Forest and Spark GraphFrames.',
      'Applied GraphFrame analysis to identify relationships between games, developers and genres, improving recommendations for marketing strategies and inventory optimisation.',
    ],
    skills: ['PySpark', 'Random Forest', 'GraphFrames', 'Model Building'],
  },
  {
    title:
      'Crime Analysis and Projection of Crime Prevention Costs in Los Angeles',
    period: 'Aug 2023 – Dec 2023',
    description: [
      'Scraped crime data from the state website of California; cleaned, processed and merged datasets for analysis.',
      'Used pandas to analyse crime statistics and identify key trends driving crime rates in Los Angeles, producing a detailed report.',
      'Created visualisations with Plotly, Folium, Matplotlib and Seaborn, revealing a 15 % increase in property crimes and a 10 % decrease in violent crime rates over the past decade.',
      'Trained predictive models using XGBoost and linear regression to forecast crime prevention costs, accurately predicting required budget increases to maintain reduction rates.',
    ],
    skills: ['Pandas', 'Scikit‑Learn', 'XGBoost', 'Data Visualisation', 'Plotly'],
  },
  {
    title: 'Smith Seekers Inc Research Database',
    period: 'Aug 2023 – Nov 2023',
    description: [
      'Extracted and compiled data from ranking websites to analyse program ranking trends for a graduate business school.',
      'Built a search‑engine‑style database for prospective students, compiling program details such as tuition, credit requirements and duration.',
      'Designed entity‑relationship diagrams and database schemas using Lucidchart and implemented queries with SQL.',
    ],
    skills: ['SQL', 'Oracle', 'MySQL', 'Database Design'],
  },
  {
    title: 'Image Classification of Dry and Wet Soil',
    period: 'Dec 2022 – May 2023',
    description: [
      'Developed a convolutional neural network with OpenCV to classify soil images into wet and dry categories for agricultural applications.',
      'Achieved 92 % accuracy in distinguishing between wet and dry soil images.',
      'Optimised irrigation schedules in test areas, resulting in a 30 % reduction in water usage by applying model predictions.',
    ],
    skills: ['OpenCV', 'Deep Learning', 'CNN', 'Python'],
  },
  {
    title: 'Predictive Analysis of Life Expectancy',
    period: 'Dec 2022 – May 2023',
    description: [
      'Predicted life expectancy trends from 2000 to 2015 by incorporating immunisation, economic and health data into a single model.',
      'Used R Studio and programming for data analysis and visualisation, identifying a strong correlation (r = 0.85) between immunisation rates and life expectancy.',
      'Integrated socio‑economic factors into the model and provided recommendations that could increase life expectancy by up to five years in some countries.',
    ],
    skills: ['R Studio', 'Data Analysis', 'Visualisation', 'Machine Learning'],
  },
];
