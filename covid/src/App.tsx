import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Affected} from './affected/Affected'
import {Vaccinated} from './Vaccinated/Vaccinated'
import {Neighbour} from './Neighbour/Neighbour'


function App() {
  return (
    <div className="App">
      <Affected />
      <Vaccinated/>
      <Neighbour/>
      
    </div>
  );
}

export default App;