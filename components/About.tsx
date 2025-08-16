'use client';

// Mark this as a client component since it uses client-only libraries
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-4xl px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">About Me</h2>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        {/* Profile picture */}
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Nishok Ilangovan"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-md"
            priority
          />
        </div>
        <div>
          <p className="mb-4 text-gray-700">
            I’m a data analyst and machine learning practitioner with a passion
            for transforming raw information into clear, concise and actionable
            insights. With experience across multiple industries, I have helped
            organizations make better decisions by building dashboards,
            automating pipelines and developing predictive models.
          </p>
          <p className="mb-4 text-gray-700">
            My toolkit includes Python, SQL, R, Neo4j, Snowflake, Tableau and
            Power BI, along with a strong foundation in statistics and
            machine learning. I thrive when collaborating with cross‑functional
            teams and enjoy communicating complex ideas through intuitive
            visualizations. Whether it’s cleaning messy datasets, modeling
            relationships or designing a new analytics solution, I’m always eager
            to learn and solve problems.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;