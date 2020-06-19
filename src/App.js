import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Courses />
      <Footer />
    </div>
  );
}
export default App;
