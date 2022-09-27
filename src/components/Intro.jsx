import React from "react";
import "../styles/Intro.css";
import devJane01 from "../assets/dev-jane-01.jpg";

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Aditya Das</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img src={devJane01} alt="a picture of Jane Smith smiling"></img>
    </section>
  );
}
