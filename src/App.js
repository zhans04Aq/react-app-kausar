import React from 'react';
import './App.scss';

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Navbar/>
          <Header/>
      </div>
    </div>
  );
}

export default App;
