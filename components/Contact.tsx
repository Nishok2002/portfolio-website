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
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Get in Touch
        </h2>
        <p className="mb-8 text-gray-700">
          I’m always happy to connect and discuss new opportunities or
          collaborations. Feel free to reach out via email or connect with me on
          LinkedIn.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:nishokilangovan2002@gmail.com"
            className="rounded-md bg-accent px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-blue-600"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/nishok-ilangovan/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gray-900 px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-gray-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;