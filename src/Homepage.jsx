import React from 'react';

const styles = {
  fallingText: {
    fontSize: '4rem',
    color: '#00f7ff',
    animation: 'fall 2s ease-out forwards, lightEffect 3s infinite',
    opacity: 0,
    background: 'linear-gradient(90deg, rgba(204, 223, 227, 0.823), rgba(221, 164, 232, 0.856), rgba(194, 250, 233, 0.864))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% 200%',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  fallingSubtext: {
    fontSize: '2rem',
    color: '#00f7ff',
    animation: 'fall 2s ease-out forwards 1s, lightEffect 3s infinite',
    opacity: 0,
    background: 'linear-gradient(90deg, rgba(204, 223, 227, 0.823), rgba(221, 164, 232, 0.856), rgba(194, 250, 233, 0.864))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% 200%',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  getStartedButton: {
    position: 'relative',
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    transition: 'background-color 0.3s ease',
    border: '2px solid transparent',
    zIndex: 1,
    overflow: 'hidden',
    marginTop: '1rem',
  },
  buttonBefore: {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'linear-gradient(60deg, transparent, rgba(134, 243, 238, 0.878), transparent)',
    transition: 'opacity 0.3s ease',
    opacity: 0,
    zIndex: -1,
  },
  buttonHover: {
    backgroundColor: '#1d4ed8',
  },
};

const Homepage = () => {
  return (
    <div>
      <h1 style={styles.fallingText}>Welcome to Our AI-based solution</h1>
      <p style={styles.fallingSubtext}>Project Cool City</p>
      <button
        style={styles.getStartedButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
      >
        Get Started
      </button>
    </div>
  );
};

export default Homepage;
