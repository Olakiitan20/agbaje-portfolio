import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>

          <h1>
            Agbaje Abdulwasiu
          </h1>

          <h2>
            Frontend & Backend Developer
          </h2>

          <p className="hero-role">
            Graphics Designer
          </p>

          <p className="hero-description">
            I build responsive and functional web applications
            while combining technology with creative visual design.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image">
            <img src="/images/profile.jpg" alt="Agbaje Abdulwasiu" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;