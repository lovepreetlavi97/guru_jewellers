import React from 'react';
import Typography from '@mui/material/Typography';
import '../../app.css'; // Import the CSS file for animation

const AnimatedText = ({ text }) => {
  return (
    <Typography
      variant="h1"
      color="white"
      sx={{
        position: 'relative',
        top: 0,
        left: 0,
        textAlign: 'center', // Center text horizontally
      }}
    >
      {text.split('').map((char, index) => (
        char === ' ' ? <span key={index}>&nbsp;</span> : (
          <span
            key={index}
            className="animated-char"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        )
      ))}
    </Typography>
  );
};

export default AnimatedText;
