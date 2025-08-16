// This component uses client-only libraries, so mark it as a client component
'use client';

import { experiences } from '../data/experience';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Increase max-width to allow the experience cards to stretch further
       * horizontally.  This helps align the period/dates across entries by
       * giving each card more room. */}
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-start gap-4 rounded-xl bg-white/70 p-8 shadow-md backdrop-blur-md md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Company info with optional logo.  Increase the logo size and
               * allocate a bit more space for the employer/date column to
               * align dates properly. */}
              <div className="flex items-start space-x-4 md:w-1/3">
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={128}
                    height={72}
                    className="h-18 w-32 rounded-md object-contain shadow"
                  />
                ) : null}
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              </div>
              {/* Role details */}
              <div className="md:w-2/3">
                <ul className="list-disc space-y-2 border-l-4 border-indigo-200 pl-6 text-gray-700">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;