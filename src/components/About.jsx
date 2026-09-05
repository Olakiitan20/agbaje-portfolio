import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* About Image */}
        <div className="about-image">
          <div className="about-image-container">
            <img
              src="/images/about.jpeg"
              alt="Agbaje Abdulwasiu"
            />
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
            I'm a <b>Full-Stack Developer</b> dedicated to building seamless,
            responsive and highly functional web applications. Because I work 
            across both frontend and backend systems, I build software with a
            deep understanding of how efficient databases and smooth user interface connect.
          </p>

          <p>
            What sets me apart is my background in <b>Graphic Design</b>. I don't just
            write clean, scalable code, I design with the end user in mind, transforming
            complex ideas into intuitive, visually striking digital experiences.
          </p>

          <p>
            As a collaborative and fast learning developer, I am looking to connect with 
            engineering teams, mentors and developers to contribute to impactful projects 
            and grow within a fast paced environment.
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