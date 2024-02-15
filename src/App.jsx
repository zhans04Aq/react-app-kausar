import React from 'react';
import './App.scss';


import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import Benefits from './components/benefits/Benefits';
import Statistics from './components/statistics/Statistics';
import About from './components/about us/About';

import Find from './components/find us/Find';

import Courses from './components/courses/Courses';
import Pros from './components/pros/Pros';
import FreeVideoCourses from './components/trialVideoCourses/TrialVideoCourses';
import Teachers from './components/OurTeachers/Teachers';
import Consultation from './components/consultation/Consultation';
import Footer from './components/footer/Footer';




function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <Benefits/>
      <Statistics/>
      <About/>
      <Courses/>
      <Find/> 
      <Pros/>
      <FreeVideoCourses/>
      <Teachers/>
      <Consultation/>
      <Footer/>
      
    </div>
  );
}

export default App;
