import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Digital Banking System",
      type: "BACKEND DEVELOPMENT",
      description:
        "A backend banking system that handles customer onboarding, account creation, authentication and core banking operations.",
      image: "/projects/digital-banking.png",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST API"],
      github: "https://github.com/Olakiitan20/fintechAssignment",
      liveDemo: "#",
    },

    {
      title: "Planets Web Application",
      type: "FRONTEND DEVELOPMENT",
      description:
        "A responsive web application that provides information about different planets through a clean and user-friendly interface.",
      image: "/projects/planets.png",
      technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
      github: "https://github.com/Olakiitan20/CAPSTONE-PROJECT-14",
      liveDemo: "https://capstone-project-14.netlify.app/",
    },

    {
      title: "Personal Portfolio",
      type: "FRONTEND DEVELOPMENT",
      description:
        "A responsive personal portfolio website created to showcase my software development and graphics design work.",
      image: "/projects/personal.png",
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/Olakiitan20/agbaje-portfolio",
      liveDemo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">
          <p className="section-label">MY PROJECTS</p>

          <h2>
            Things I've
            <br />
            built.
          </h2>

          <p>
            Here are some of the projects I've worked on while
            developing my skills in frontend, backend and full-stack
            development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              {/* Project Screenshot */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                />
              </div>

              {/* Project Information */}
              <div className="project-content">

                <p className="project-type">
                  {project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.liveDemo !== "#" && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>
                  )}

                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;