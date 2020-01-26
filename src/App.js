import React from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <header>
        <p>
          <code style={{ fontSize: 'xx-large'}}>
            Robot Monkey Butler
          </code>
        </p>
      </header>
      <Main/>

    </div>
  );
}

export default App;
