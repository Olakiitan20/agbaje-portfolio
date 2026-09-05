import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Digital Banking System",
      type: "BACKEND DEVELOPMENT",
      description:
        "A highly secure, production ready fintech engine that automates customer onboarding, enforces strict user authethication and manages core ledger operations. The system throughput REST endpoints to process real time financial transaction, balance updates and account creation with absolute data integrity.",
      image: "/projects/digital-banking.jpeg",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST API", "JSON Web Tokens (JWT)", "Bcrypt", "Postman"],
      github: "https://github.com/Olakiitan20/fintechAssignment",
      liveDemo: "#",
    },

    {
      title: "Planets Web Application",
      type: "FRONTEND DEVELOPMENT",
      description:
        "A sleek, responsive web application that delivers detailed insights into our solar system through an intuitive user interface. It translates complex planetary data into highly readable, interactive views with fluid transitions and perfect layouts tailored for any screen size..",
      image: "/projects/planets.png",
      technologies: ["React", "JavaScript", "CSS", "NodeMailer"],
      github: "https://github.com/Olakiitan20/CAPSTONE-PROJECT-14",
      liveDemo: "https://capstone-project-14.netlify.app/",
    },

    {
      title: "Personal Portfolio",
      type: "FRONTEND DEVELOPMENT",
      description:
        "A responsive personal portfolio website created to showcase my full-stack developer and graphics design work.",
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