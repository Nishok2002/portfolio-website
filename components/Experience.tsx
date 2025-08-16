import { experiences } from '../data/experience';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-gray-50 px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <div className="mt-2 border-l-4 border-accent pl-6 md:mt-0 md:w-3/4">
                <ul className="list-disc space-y-2 text-gray-700">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;