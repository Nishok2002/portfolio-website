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
      <div className="mx-auto max-w-5xl">
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
              {/* Company info with optional logo */}
              <div className="flex items-start space-x-4 md:w-1/4">
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover shadow"
                  />
                ) : null}
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              </div>
              {/* Role details */}
              <div className="md:w-3/4">
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