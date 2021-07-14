import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoComponent from './infoComponent';
import ClickCounter from './clickCounter';
import Component1 from './Component1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InfoComponent
          title="NASA"
          paragraph1="The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research."
          paragraph2="NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a distinctly civilian orientation, encouraging peaceful applications in space science."
          image="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA15416_hires.jpg"
        />
        <ClickCounter />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component1/>
      </header>
    </div>
  );
}

export default App;
