import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I am a <code>Software Developer</code> please contact me if you have an idea about this domain.
          </p>
          <a
            className="App-link"
            href="mailto:alitaqizadeh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </header>
      </div>
    );
  }
}

export default App;
