import { useEffect, useState } from 'react';
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';

const Projects = () => {
  // State to hold projects and meta content
  const [projects, setProjects] = useState([]);
  const [meta, setMeta] = useState(null); 

  // Fetch projects and meta content on component mount
  useEffect(() => {
    // Fetch projects
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error("Failed to fetch projects", err));

    // Fetch meta content
    axios.get("http://localhost:5000/api/project-meta")
      .then(res => setMeta(res.data))
      .catch(err => console.error("Failed to fetch project meta", err));
  }, []);

  return (
    <section className="px-4 py-10">
      {/* =================== Intro Part =============== */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        {/* h1 split the heading to provide different color for projects word */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          {meta?.heading
            ? meta.heading.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-[#1ED1BF]" : ""}>
                {word}{" "}
              </span>
            ))
            : <>My <span className="text-[#1ED1BF]">Projects</span></>
          }
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-2 text-base max-w-2xl mx-auto">
          {meta
            ? meta.paragraph
            : "Here is a collection of some of my projects built using React and other web development tools."}
        </p>

      </div>

      {/* ============== Project Section =============== */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        {projects.map(({ _id, title, description, image, github, live, githubIcon, liveIcon }) => {
          const GithubIcon = FaIcons[githubIcon] || FaIcons.FaGithub;
          const LiveIcon = FaIcons[liveIcon] || FaIcons.FaExternalLinkAlt;

          return (
            <div
              key={_id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-xl border border-gray-200 dark:border-gray-700"
            >
              {/* Image */}
              <div className="w-full h-56 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <img
                  src={`http://localhost:5000/uploads/${image}`}
                  alt={title}
                  className="h-full object-contain p-2"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1ED1BF] hover:underline"
                  >
                    <GithubIcon /> Code
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1ED1BF] hover:underline"
                  >
                    <LiveIcon /> Live
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
