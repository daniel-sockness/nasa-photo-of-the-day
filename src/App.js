import React, {useState, useEffect} from "react";
import "./App.css";

import Logo from './components/Head/Head';
import Apod from './components/apod/Apod'


function App() {
  return (
    
    <div className="container">
      
      <Logo />
      <div className="App">
        <Apod />
      </div>
    </div>
  );
}

export default App;
