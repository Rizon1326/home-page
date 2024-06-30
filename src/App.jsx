import React from 'react';
import './App.css';
import Homepage from './Homepage'; // Ensure this path is correct
import bgVideo from './assets/bg.mp4';

function App() {
  return (
    <div className="app-container">
      <video className="video-background" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
