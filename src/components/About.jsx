import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* About Image */}
        <div className="about-image">
          <div className="about-placeholder">
            <span>About</span>
            <span>Me</span>
          </div>
        </div>

        {/* About Content */}
        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building with code.
            <br />
            Creating with design.
          </h2>

          <p>
            I'm a software developer passionate about building
            responsive, functional and user-friendly web applications.
          </p>

          <p>
            My interests cover both frontend and backend development,
            allowing me to understand how different parts of a web
            application work together.
          </p>

          <p>
            Beyond development, I also have an interest in graphics
            design, where I enjoy turning ideas into creative visual
            experiences.
          </p>

          {/* About Buttons */}
          <div className="about-buttons">
            <a href="#contact" className="about-button">
              Let's Work Together
            </a>

            <a
              href="/cv/Agbaje_Abdulwasiu_CV.pdf"
              className="about-button cv-button"
              download
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;