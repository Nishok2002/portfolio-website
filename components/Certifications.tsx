// This component uses client-only libraries, so mark it as a client component
'use client';

import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          Certifications &amp; Education
        </h2>
        <ul className="space-y-5">
          {certifications.map((cert, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/**
               * If a link is provided, wrap the card in an anchor tag so that
               * clicking the card navigates to the certification page.  When a
               * clipboard value is present we intercept the click to copy the
               * code before opening the link.  Without a link we simply render
               * the card as a static element.
               */}
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 rounded-xl bg-white/80 p-6 shadow-md backdrop-blur-md transition-transform hover:shadow-lg"
                  onClick={(e) => {
                    // If a clipboard code is present, copy it before navigating.
                    if (cert.clipboard) {
                      e.preventDefault();
                      navigator.clipboard
                        .writeText(cert.clipboard)
                        .catch(() => {
                          /* noop: clipboard may not be available in some browsers */
                        })
                        .finally(() => {
                          window.open(cert.link, '_blank');
                        });
                    }
                  }}
                >
                  {cert.logo ? (
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      width={96}
                      height={56}
                      className="h-14 w-24 rounded-md object-contain"
                    />
                  ) : null}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {cert.issuer} &middot; {cert.issued}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center space-x-4 rounded-xl bg-white/80 p-6 shadow-md backdrop-blur-md">
                  {cert.logo ? (
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      width={96}
                      height={56}
                      className="h-14 w-24 rounded-md object-contain"
                    />
                  ) : null}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {cert.issuer} &middot; {cert.issued}
                    </p>
                  </div>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Certifications;