import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus(
        error.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's build
            <br />
            something together.
          </h2>

          <p>
            Have a project in mind, a job opportunity, or simply
            want to connect? Feel free to reach out through any of
            the platforms below.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Links */}
          <div className="contact-info">

            {/* GitHub */}
            <a
              href="https://github.com/Olakiitan20"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <FaGithub />
              </span>

              <div>
                <span className="contact-label">
                  GitHub
                </span>

                <span className="contact-value">
                  View my projects
                </span>
              </div>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/A_Wasco20"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <FaXTwitter />
              </span>

              <div>
                <span className="contact-label">
                  Twitter / X
                </span>

                <span className="contact-value">
                  Follow me on X
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdulwasiu-agbaje-5547301b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <FaLinkedinIn />
              </span>

              <div>
                <span className="contact-label">
                  LinkedIn
                </span>

                <span className="contact-value">
                  Connect with me
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:agbajewasiu6@gmail.com"
              className="contact-item"
            >
              <span className="contact-icon">
                <MdEmail />
              </span>

              <div>
                <span className="contact-label">
                  Email
                </span>

                <span className="contact-value">
                  agbajewasiu6@gmail.com
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/08153061697"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <FaWhatsapp />
              </span>

              <div>
                <span className="contact-label">
                  WhatsApp
                </span>

                <span className="contact-value">
                  Send me a message
                </span>
              </div>
            </a>

          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-button"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Message ↗"}
            </button>

           {status && (
  <div
    className={`form-notification ${
      status.includes("successfully") ? "success" : "error"
    }`}
  >
    <span>
      {status.includes("successfully") ? "✓" : "✕"}
    </span>

    <p>{status}</p>
  </div>
)}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;