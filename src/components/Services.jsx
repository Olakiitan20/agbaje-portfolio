import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "I build responsive and user-friendly websites and web interfaces using modern frontend technologies.",
      skills: ["React", "JavaScript", "HTML", "CSS"],
    },

    {
      number: "02",
      title: "Backend Development",
      description:
        "I develop reliable backend systems, REST APIs and server-side applications that connect applications to databases.",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },

    {
      number: "03",
      title: "Full-Stack Development",
      description:
        "I combine frontend and backend technologies to build complete web applications from the user interface to the server.",
      skills: ["React", "Node.js", "Express.js", "MongoDB"],
    },

    {
      number: "04",
      title: "Graphics Design",
      description:
        "I create creative visual designs that help individuals and businesses communicate their ideas and build their brand.",
      skills: ["Logo Design", "Flyer Design", "Branding", "Social Media"],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-heading">
          <p className="section-label">WHAT I DO</p>

          <h2>
            Turning ideas
            <br />
            into solutions.
          </h2>

          <p>
            Whether it's building a web application or creating a visual
            identity, I enjoy turning ideas into functional and creative
            solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-skills">
                {service.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;