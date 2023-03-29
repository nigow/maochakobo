import React from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import People from "./components/People";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{ margin: "2rem" }}>
        <About />
        <People />
        <Career />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
