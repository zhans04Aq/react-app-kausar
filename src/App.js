import React from 'react';
import './App.scss';

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';
import Benefits from './components/benefits/Benefits';
import Statistics from './components/statistics/Statistics';
function App() {
  return (
    <div className="App">
      <div className="container">
          <Navbar/>
          <Header/>
          <Benefits/>
          <Statistics/>
      </div>
    </div>
  );
}

export default App;
