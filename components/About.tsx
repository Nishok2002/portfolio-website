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
      <div className="rounded-xl bg-white/80 p-8 shadow-md backdrop-blur-md md:max-w-5xl md:mx-auto">
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
          {/* A concise summary focusing on experience and domains
             presented as bullet points for easier reading. */}
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Over three years of experience in data analytics and machine learning</li>
            <li>Worked across insurance, research, education and retail domains</li>
            <li>Build dashboards, automate pipelines and develop predictive models</li>
            <li>Proficient in Python, SQL, Snowflake and Power&nbsp;BI</li>
            <li>Passionate about turning complex datasets into clear stories and collaborating with teams</li>
          </ul>
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;