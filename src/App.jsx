import React from 'react';
import bgVideo from './assets/bg.mp4';
import Homepage from './Homepage'; // Ensure this path is correct

const styles = {
  appContainer: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
    color: 'white',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100vw',
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -1,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
};

const App = () => {
  return (
    <div style={styles.appContainer}>
      <video style={styles.videoBackground} autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.content}>
        <Homepage />
      </div>
    </div>
  );
};

export default App;
