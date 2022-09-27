import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Designer & developer based out of NYC
        </p>

        <div className="about-me__body">
          <p></p>
          <p></p>
        </div>
        <img src="/dev-jane-02.jpg" alt="Jane leaning against a bus" />
      </section>
    </>
  );
}
