import { useEffect, useState } from "react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  repo: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/src/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Failed to load projects:", error));
  }, []);

  return (
    <section className="pt-4">
      <ol className="flex flex-col text-white font-roboto font-[400] selection:bg-sky-400 selection:text-gray-800">
        {projects.map((project, index) => (
          <li key={index} className="my-4">
            <a href={project.repo}
              className="min-h-100 rounded-lg border-sky-600/30 border-2 p-5 flex lg:flex-row flex-col overflow-ellipsis gap-5 justify-center hover:border-sky-400/30 transition duration-100 group"
            >
              <section className="flex-1 max-w-0.8">
                <h4 className="font-gabarito text-4xl py-5 group-hover:text-sky-400 opacity-70 group-hover:opacity-100 transition duration-100">
                  {project.name}
                </h4>
                <p className="py-2 opacity-70 group-hover:opacity-100 transition duration-100">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="mr-1.5 mt-2 rounded-xl bg-sky-500/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400 opacity-100"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>
              <img src={project.image} alt={project.name}
                className="w-full h-full self-center flex-2 rounded-lg object-contain opacity-70 group-hover:opacity-100 transition duration-100"
              />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
