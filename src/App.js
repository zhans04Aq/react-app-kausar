import React from 'react';
import './App.scss';

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import Benefits from './components/benefits/Benefits';
import Statistics from './components/statistics/Statistics';
import About from './components/about us/About';
import Find from './components/find us/Find';
function App() {
  return (
    <div className="App">
      <div className="container">
          <Navbar/>
          <Header/>
          <Benefits/>
          <Statistics/>
          <About/>
          <Find/> 
      </div>
    </div>
  );
}

export default App;
