import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mb-2 text-sm text-gray-500">{project.period}</p>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
