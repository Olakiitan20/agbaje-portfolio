import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies & tools
            <br />
            I work with.
          </h2>

          <p>
            I enjoy building web applications from the frontend
            interface to the backend logic, while also using my
            graphics design skills to create visual experiences.
          </p>
        </div>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend Development</h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Responsive Design</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend Development</h3>

            <div className="skill-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>Authentication</span>
            </div>
          </div>

          {/* Design & Tools */}
          <div className="skill-card">
            <h3>Design & Tools</h3>

            <div className="skill-list">
              <span>Graphics Design</span>
              <span>Logo Design</span>
              <span>Flyer Design</span>
              <span>Git & GitHub</span>
              <span>Postman</span>
              <span>VS Code</span>
              <span>Photoshop</span>
              <span>Coreldraw</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;