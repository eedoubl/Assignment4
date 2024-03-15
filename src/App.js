/*
  App.js
  @author Ethan Mil
  @version 1.0.0

  Parent file for React App.
*/

import React from 'react';
import PlaylistPt2 from './components/PlaylistPt2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlaylistPt2 />
      </header>
    </div>
  );
}

export default App;

