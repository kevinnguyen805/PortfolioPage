import React from 'react';
import {Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Route path="/" component={LandingPage}/>
    </div>
  );
}

export default App;
