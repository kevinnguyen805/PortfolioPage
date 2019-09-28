import React from 'react';
import {Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      
      <Route path="/" component={LandingPage}/>
      <Route path="/" component={AboutMe}/>
      <Route path="/" component={Projects}/>
      <Route path="/" component={Contact}/>
    </div>
  );
}

export default App;
