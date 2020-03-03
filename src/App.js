import React from 'react';
import AboutMe from './assets/components/AboutMe.js';
import Modal from './assets/components/Modal.js';
import Portfolio from './assets/components/Portfolio.js';
import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='aboutme'>
        <AboutMe />
      </div>
      <div className='portfolio'>
        <Portfolio />
      </div>
      <Modal />
    </div>
  );
}

export default App;
