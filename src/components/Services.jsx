import React from "react";
import "../styles/Services.css";

export default function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Design</h3>
          <p>
            Proficient in making web-page design using prototyping tools like
            Figma & Adobe XD.
          </p>
        </div>
        <div className="service">
          <h3>Development</h3>
          <p>
            Capable of making responsive and interactive websites using
            <strong>HTML5,CSS & React js</strong>
          </p>
        </div>
        {/* Close service */}
      </div>
      {/* Close services */}

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}
