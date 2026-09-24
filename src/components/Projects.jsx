import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Inventory Manager",
      type: "FULL-STACK DEVELOPMENT",
      description:
        "A full-stack inventory management system designed to help businesses manage products, stock movements, customers, invoices, payments and user access from a centralized dashboard.",
      image: "/projects/inventory-manager.png",
      technologies: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT",
      ],
      github: "https://github.com/Olakiitan20/inventory-manager",
      liveDemo: "https://inventory-manager-snowy-delta.vercel.app",
    },

    {
      title: "Expert Listing Typeahead",
      type: "FRONTEND DEVELOPMENT",
      description:
        "A responsive autocomplete search component built as a frontend screening task. The application searches a public API as the user types and provides interactive results with loading, error and keyboard navigation states.",
      image: "/projects/typeahead.png",
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "REST API",
        "CSS",
      ],
      github: "https://github.com/Olakiitan20/expert-listing-typeahead",
      liveDemo: "https://expert-listing-typeahead-elpar5c3o-olakiitan.vercel.app",
    },

    {
      title: "Digital Banking System",
      type: "BACKEND DEVELOPMENT",
      description:
        "A backend fintech system that handles customer onboarding, authentication, account management and financial transactions through REST API endpoints, with a focus on data integrity and secure access.",
      image: "/projects/digital-banking.jpeg",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT",
        "Bcrypt",
        "Postman",
      ],
      github: "https://github.com/Olakiitan20/fintechAssignment",
      liveDemo: "#",
    },

    {
      title: "Planets Web Application",
      type: "FRONTEND DEVELOPMENT",
      description:
        "A sleek, responsive web application that provides detailed information about the planets in our solar system through an intuitive interface, interactive views and layouts optimized for different screen sizes.",
      image: "/projects/planets.png",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "NodeMailer",
      ],
      github: "https://github.com/Olakiitan20/CAPSTONE-PROJECT-14",
      liveDemo: "https://capstone-project-14.netlify.app/",
    },

    {
      title: "Personal Portfolio",
      type: "FRONTEND DEVELOPMENT",
      description:
        "A responsive personal portfolio website built to showcase my software development projects, technical skills and graphics design work.",
      image: "/projects/personal.png",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
      ],
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
            <article
              className="project-card"
              key={project.title}
            >

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