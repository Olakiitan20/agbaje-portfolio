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
              <span>JSON Web Token</span>
            </div>
          </div>

          {/* Design */}
          <div className="skill-card">
            <h3>Design</h3>

            <div className="skill-list">
              <span>Brand Identity</span>
              <span>Logo Design</span>
              <span>Flyer Design</span>
              <span>Social Media Design</span>
              <span>Print Design</span>
            </div>
          </div>

           {/* Tools */}
          <div className="skill-card">
            <h3>Tools</h3>

            <div className="skill-list">
              <span>Git/Github</span>
              <span>Postman</span>
              <span>VS Code</span>
              <span>Photoshop</span>
              <span>CorelDraw</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;