import React from "react";
import "../styles/Intro.css";
import gon from "../assets/gon.png";

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Aditya Das</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img
        src={gon}
        alt="a picture of Aditya smiling"
        className="intro__img"
      ></img>
    </section>
  );
}
