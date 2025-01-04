
import React from 'react';

const ShinyEffect = ({ left, right, top, size = 100 }) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
    position: "absolute", 
    maxWidth: "100vw",
    maxHeight: "100vh",
  };

  if (left !== undefined) {
    positionStyles.left = `clamp(0px, ${left}px, calc(100vw - ${size}px))`;
  }

  if (right !== undefined) {
    positionStyles.right = `clamp(0px, ${right}px, calc(100vw - ${size}px))`;
  }

  return <div className="shiny-effect " style={positionStyles}></div>;
};

export default ShinyEffect;
