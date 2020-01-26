import React from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <header>
        <code style={{ fontSize: 'small'}}>
          robot.monkey.butler
        </code>
      </header>
      <Main/>

    </div>
  );
}

export default App;
