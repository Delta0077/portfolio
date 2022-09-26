import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import './styles/style.css'
export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </>
  );
}
