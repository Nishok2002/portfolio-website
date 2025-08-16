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
          {/* A concise summary focusing on experience and domains */}
          <p className="mb-4 text-gray-700">
            With over three years of experience in data analytics and machine
            learning, I’ve helped organisations across insurance, research,
            education and retail unlock insights from their data. I build
            dashboards, automate pipelines and develop predictive models using
            tools such as Python, SQL, Snowflake and Power BI.
          </p>
          <p className="text-gray-700">
            I’m passionate about turning complex datasets into clear stories that
            drive better decisions and enjoy collaborating with diverse teams to
            solve challenging problems.
          </p>
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;