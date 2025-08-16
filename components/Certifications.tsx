// This component uses client-only libraries, so mark it as a client component
'use client';

import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="bg-gray-50 px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          Certifications &amp; Education
        </h2>
        <ul className="space-y-6">
          {certifications.map((cert, idx) => (
            <li
              key={idx}
              className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              {cert.logo ? (
                // Render credential or degree logo.  Use a rectangular size with
                // rounded corners and object-contain so the full image is visible.
                <Image
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  width={64}
                  height={40}
                  className="h-10 w-16 rounded-md object-contain"
                />
              ) : null}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {cert.issuer} &middot; {cert.issued}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Certifications;