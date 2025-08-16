// This component uses client-only libraries, so mark it as a client component
'use client';

import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => {
            // Define a palette of soft pastel colours for the sticky notes.
            const colours = ['bg-yellow-100', 'bg-purple-100', 'bg-green-100', 'bg-pink-100'];
            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
            const colour = colours[idx % colours.length];
            const rotation = rotations[idx % rotations.length];
            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-lg p-6 shadow-lg transition-transform hover:scale-105 ${colour} ${rotation}`}
              >
                {/* Use an after pseudo-element via Tailwind to simulate the sticky note corner */}
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-2 text-sm text-gray-600">{project.period}</p>
                <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs text-gray-700 shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;