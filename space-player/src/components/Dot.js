// Dot.js
import React from 'react';
import '../styles/Dot.css'; // Import the CSS for styling

function Dot({ x, y }) {
  const dotStyle = {
    left: `${x}%`,
    top: `${y}%`,
  };

  return <div className="dot" style={dotStyle}></div>;
}

export default Dot;
