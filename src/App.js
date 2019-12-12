import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Aerodynamics from './components/ProjectPage/Aerodynamics';

import BCM from './components/ProjectPage/BCM';
import ACB from './components/ProjectPage/ACB';
import Shutdown from './components/ProjectPage/Shutdown';
import WiringHarness from './components/ProjectPage/WiringHarness';
import BCMBreakout from './components/ProjectPage/BCMBreakout';
import HVControlBoard from './components/ProjectPage/HVControlBoard';

function App() {
  return (
    <Router>
      <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
      <div className="app">
        <Route exact path="/"
          component={HomePage}/>  
        <Route path="/bodycontrolmodule" 
          component={BCM} />
        <Route path="/accumulatorcontrolboard" 
          component={ACB} />
        <Route path="/shutdowncircuit" 
        component={Shutdown} />
        <Route path="/wiringharness" 
        component={WiringHarness} />
        <Route path="/bodycontrolmodulebreakoutboard" 
        component={BCMBreakout} />
        <Route path="/hvcontrolboard" 
        component={HVControlBoard} />
      </div>
    </Router>
  );
}

export default App;
