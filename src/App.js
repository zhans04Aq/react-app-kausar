import React from 'react';
import './App.scss';

import lightSrc from './assets/img/light-src5.png'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import Benefits from './components/benefits/Benefits';
import Statistics from './components/statistics/Statistics';
import About from './components/about us/About';
import Courses from './components/courses/Courses';
import Pros from './components/pros/Pros';
function App() {
  return (
    <div className="App">
   
      <div className="container">
          <Navbar/>
          <Header/>
          <Benefits/>
      </div>
      <img className="light-src" src={lightSrc} alt="" />
      <div className="container">
        <About/>  
      </div>
      <div className="container">
          <Statistics/>
          <Courses/>
          <Pros/>

      </div>
    </div>
  );
}

export default App;
