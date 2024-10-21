import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Styles for the cursor
  const cursorStyle = {
    width: '25px',
    height: '25px',
    borderRadius: '100%',
    border: '1px solid var(--assimox-base)',
    transition: 'all 200ms ease-out',
    position: 'fixed',
    left: position.x,
    top: position.y,
    transform: 'translate(calc(-50% + 5px), -50%)',
    zIndex: 999991,
    pointerEvents: 'none', // Ensure clicks pass through
  };

  const cursorTwoStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    backgroundColor: 'var(--assimox-base)',
    opacity: 0.3,
    position: 'fixed',
    left: position.x,
    top: position.y,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s, height 0.3s, opacity 0.3s',
    zIndex: 999991,
    pointerEvents: 'none', // Ensure clicks pass through
  };

  return (
    <>
      <div style={cursorStyle} />
      <div style={cursorTwoStyle} />
    </>
  );
};

export default CustomCursor;
