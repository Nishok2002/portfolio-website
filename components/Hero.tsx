import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative flex h-screen flex-col items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Abstract technology background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/80" />
      </div>
      <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
        Turning Data into Insights
      </h1>
      <p className="mb-8 max-w-xl text-lg text-gray-700 sm:text-xl">
        I am a data analyst and machine learning enthusiast passionate about
        uncovering patterns and delivering actionable insights.
      </p>
      <a
        href="#about"
        className="rounded-md bg-accent px-8 py-3 text-white shadow-md transition-colors hover:bg-blue-600"
      >
        Learn More
      </a>
    </motion.section>
  );
};

export default Hero;