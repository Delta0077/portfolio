import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Designer & developer based out of <strong>INDIA</strong>
        </p>

        <div className="about-me__body">
          <p>
            Recent Postgraduate looking for internship/job experience. Highly
            motivated to learn new technologies required to get a job done.
            Experienced in UI/UX designing using Adobe XD & Figma. Proficient in
            making responsive and interactive web pages using html5, CSS &
            React.
          </p>
        </div>
        <img
          src="/Aditya__profile_1.jpg"
          alt="Sample pic"
          className="about-me__img"
        />
      </section>
    </>
  );
}
