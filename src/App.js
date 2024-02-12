import React from 'react';
import './App.scss';

import lightSrc from './assets/img/light-src5.png'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import Benefits from './components/benefits/Benefits';
import Statistics from './components/statistics/Statistics';
import About from './components/about us/About';
<<<<<<< HEAD
import Find from './components/find us/Find';
=======
import Courses from './components/courses/Courses';
import Pros from './components/pros/Pros';
>>>>>>> 527be8e9ac22d6772e7d8def68ff7bf77fb5f09b
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
<<<<<<< HEAD
          <About/>
          <Find/> 
=======
          <Courses/>
          <Pros/>

>>>>>>> 527be8e9ac22d6772e7d8def68ff7bf77fb5f09b
      </div>
    </div>
  );
}

export default App;
