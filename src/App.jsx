import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import "./styles/style.css";
export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </>
  );
}
