import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <About />
      <Portfolio />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


