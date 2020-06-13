import React from "react";

import "./App.css";

import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";

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
