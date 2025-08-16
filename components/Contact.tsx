// This component uses client-only libraries, so mark it as a client component
'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-3xl text-center rounded-xl bg-white/80 p-8 shadow-md backdrop-blur-md">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Get in Touch</h2>
        <p className="mb-8 text-gray-700">
          I’m always happy to connect and discuss new opportunities or
          collaborations. Feel free to reach out via email or connect with me on
          LinkedIn.
        </p>
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
          <a
            href="mailto:nishokilangovan2002@gmail.com"
            className="w-full sm:w-auto rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 px-6 py-3 text-center font-medium text-white shadow transition-transform hover:scale-105"
          >
            Send&nbsp;Email
          </a>
          <a
            href="https://www.linkedin.com/in/nishok-ilangovan/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 px-6 py-3 text-center font-medium text-white shadow transition-transform hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;