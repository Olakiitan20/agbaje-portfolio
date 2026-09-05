import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Footer Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Agbaje.
            </a>

            <p>
              Frontend & Backend Developer
              <br />
              Graphics Designer
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#design">Design</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h3>Connect</h3>

            <div className="footer-social-links">

              <a
                href="https://github.com/Olakiitan20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://x.com/A_Wasco20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.linkedin.com/in/abdulwasiu-agbaje-5547301b3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/08153061697"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Agbaje Abdulwasiu.
            All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;