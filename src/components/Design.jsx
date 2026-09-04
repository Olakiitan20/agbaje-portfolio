import { useState } from "react";
import "./Design.css";

function Design() {
  const [selectedDesign, setSelectedDesign] = useState(null);

  const designs = [
    {
      title: "Brand Identity Design",
      category: "BRANDING",
      image: "/designs/brand-identity.jpg",
    },
    {
      title: "Flyer Design",
      category: "FLYER DESIGN",
      image: "/designs/flyer-design.jpg",
    },
    {
      title: "Social Media Design",
      category: "SOCIAL MEDIA",
      image: "/designs/social-media.jpg",
    },
    {
      title: "Logo Design",
      category: "LOGO DESIGN",
      image: "/designs/logo-design.jpg",
    },
    {
      title: "Poster Design",
      category: "POSTER DESIGN",
      image: "/designs/poster-design.jpg",
    },
    {
      title: "Creative Design",
      category: "GRAPHICS DESIGN",
      image: "/designs/creative-design.jpg",
    },
  ];

  return (
    <section className="design" id="design">
      <div className="design-container">

        {/* Section Heading */}
        <div className="design-heading">
          <p className="section-label">GRAPHICS DESIGN</p>

          <h2>
            Creativity beyond
            <br />
            the code.
          </h2>

          <p>
            I also enjoy creating visual designs that communicate
            ideas, build brands and connect with audiences.
          </p>
        </div>

        {/* Design Gallery */}
        <div className="design-grid">
          {designs.map((design) => (
            <article
              className="design-card"
              key={design.title}
              onClick={() => setSelectedDesign(design)}
            >
              <div className="design-image">
                <img
                  src={design.image}
                  alt={design.title}
                />
              </div>

              <div className="design-content">
                <p>{design.category}</p>
                <h3>{design.title}</h3>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      {selectedDesign && (
        <div
          className="design-modal"
          onClick={() => setSelectedDesign(null)}
        >
          <button
            className="modal-close"
            onClick={() => setSelectedDesign(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedDesign.image}
              alt={selectedDesign.title}
            />

            <div className="modal-info">
              <p>{selectedDesign.category}</p>
              <h3>{selectedDesign.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Design;