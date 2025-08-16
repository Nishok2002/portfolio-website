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
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => {
            // Define a palette of soft pastel colours for the sticky notes. These
            // colours are subtle and cohesive with the site’s purple palette.
            const colours = ['bg-amber-100', 'bg-rose-100', 'bg-teal-100', 'bg-lime-100'];
            const colour = colours[idx % colours.length];
            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-lg p-6 shadow-md transition-transform hover:scale-[1.02] ${colour}`}
              >
                {/* Pin */}
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-300 shadow h-3 w-3" />
                {/* Folded corner */}
                <div className="absolute right-0 top-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-purple-200" />
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">
                  {project.period}
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/80 px-3 py-1 text-xs text-gray-800 shadow"
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