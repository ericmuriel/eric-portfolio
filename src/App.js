import React from 'react';

import './App.css';

import Header from './Components/Header/Header'
import './Components/Header/Header.css'

import About from './Components/About/About'
import './Components/About/About.css'

import Portfolio from './Components/Portfolio/Portfolio'
import './Components/Portfolio/Portfolio.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
    </div>
  );
}
export default App;
