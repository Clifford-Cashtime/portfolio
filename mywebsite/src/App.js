import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import GetPDF from './components/pages/GetPDF';
import Project from './components/pages/Project';
import Achievement from './components/pages/Achievement';
import Award from './components/pages/Award';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';

function App() { 
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/GetPDF' component={GetPDF} />
          <Route path='/Project' component={Project} />
          <Route path='/Achievement' component={Achievement} />
          <Route path='/Award' component={Award} />
          <Route path='/Skills' component={Skills} />
          <Route path='/Experience' component={Experience} />
        </Switch>
      </Router>
    </>
  );
}

export default App;