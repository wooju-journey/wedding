
import React from 'react';

function Introduction() {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    textOverlay: {
      position: 'absolute',
      top: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      width: '100%'
    },
    textShadow: {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    },
  };

  return (
    <div style={styles.container}>
      <img src={process.env.PUBLIC_URL + '/main.jpg'} alt="Wedding" style={styles.image} />
      <div style={styles.textOverlay}>
        <div className="responsive-title">
          <p style={styles.textShadow}>Wedding</p>
          <p style={styles.textShadow}>Invitation</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
