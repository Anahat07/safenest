import React, { useState, useEffect } from 'react';

const AnimatedHeader = ({ onAnimationComplete, shouldPlay }) => {
  const [visibleWords, setVisibleWords] = useState([[], [], []]);

  const textLines = [
    "Control Your Wealth.",
    "Redefine Success.",
    "Own Your Story."
  ];

  useEffect(() => {
    if (!shouldPlay) return; // Skip the animation if shouldPlay is false

    const timeouts = [];
    
    textLines.forEach((line, lineIndex) => {
      const words = line.split(" ");
      words.forEach((word, wordIndex) => {
        const timeout = setTimeout(() => {
          setVisibleWords((prev) => {
            const newState = [...prev];
            newState[lineIndex] = [...newState[lineIndex], word];
            return newState;
          });

          // Check if it's the last word of the last line
          if (lineIndex === textLines.length - 1 && wordIndex === words.length - 1) {
            onAnimationComplete(); // Trigger callback when animation completes
          }
        }, 1000 * lineIndex + 300 * wordIndex);
        timeouts.push(timeout);
      });
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout)); // Cleanup timeouts
    };
  }, [onAnimationComplete, shouldPlay]);

  return (
    <div className="animated-header">
      {textLines.map((line, lineIndex) => (
        <h1 key={lineIndex} className="transition duration-1000 ease-in-out text-6xl sm:text-8xl md:text-10xl lg:text-12xl">
          {visibleWords[lineIndex].map((word, index) => (
            <span key={index} className="word">
              {word}{" "}
            </span>
          ))}
        </h1>
      ))}
    </div>
  );
};

export default AnimatedHeader;
