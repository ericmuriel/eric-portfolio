import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header'
import './Components/Header/Header.css'

import About from './Components/About/About'
import './Components/About/About.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <About/> 
    </div>
  );
}

export default App;
