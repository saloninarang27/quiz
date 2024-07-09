// src/components/Score.js
import React from 'react';

const Score = ({ score, totalQuestions }) => {
  return (
    <div id="cc">
      <h2>Your Score</h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
    </div>
  );
};

export default Score;
