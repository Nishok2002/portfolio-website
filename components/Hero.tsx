'use client';

// NOTE: This component uses client-side libraries, so mark it as a client component
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * The hero section introduces the site with a welcoming gradient and
 * dynamic typewriter effect cycling through Nishok's core roles. A subtle
 * background image adds texture while the overlay ensures the text
 * remains legible. The call‑to‑action button stands out with a white
 * background and purple text, inviting visitors to scroll down.
 */
// Titles to cycle through in the typewriter effect. Each title includes
// an appropriate emoji at the end to hint at the nature of the role. We use
// standard Unicode emojis that should render in iOS style on supported devices.
const titles = [
  'Data Analyst \uD83D\uDCCA', // bar chart for analytics
  'Data Engineer \u2699\uFE0F', // gear symbol for engineering
  'Machine Learning Engineer \uD83E\uDDE0' // brain for machine learning
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect: cycles through titles, typing and deleting one character at a time
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timer: NodeJS.Timeout;

    if (!deleting && displayText === currentTitle) {
      // Pause briefly when the full word is typed
      timer = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && displayText === '') {
      // Move to the next title once deletion is complete
      setDeleting(false);
      setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          deleting
            ? currentTitle.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        );
      }, deleting ? 50 : 120);
    }

    return () => clearTimeout(timer);
  }, [displayText, deleting, currentTitleIndex]);

  return (
    <motion.section
      id="home"
      className="relative flex h-screen flex-col items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/**
       * Removed the background image here so the gradient defined in
       * globals.css can shine through. This gives the hero section a
       * cleaner, more cohesive look that matches the rest of the site.
       */}
      <h1 className="mb-2 text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
        Nishok Ilangovan
      </h1>
      {/* Animated title that cycles through roles */}
      <h2 className="mb-4 text-2xl font-medium text-indigo-600 sm:text-3xl md:text-4xl">
        {displayText}
        {/* Animated caret that pulses alongside the typewriter text */}
        <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-indigo-500 align-middle" />
      </h2>
      {/* Short tagline / skills summary */}
      <p className="mb-1 max-w-2xl text-base text-gray-700 sm:text-lg">
        Passionate about uncovering patterns and delivering actionable insights.
      </p>
      {/* Primary technical skills */}
      <p className="mb-8 text-sm font-medium uppercase tracking-wider text-indigo-600 sm:text-base">
        Python&nbsp;•&nbsp;SQL&nbsp;•&nbsp;Snowflake&nbsp;•&nbsp;Power&nbsp;BI&nbsp;•&nbsp;Neo4j
      </p>
      <a
        href="#about"
        className="rounded-md bg-white/90 px-8 py-3 font-medium text-indigo-700 shadow transition-colors hover:bg-white"
      >
        Learn More
      </a>
    </motion.section>
  );
};

export default Hero;