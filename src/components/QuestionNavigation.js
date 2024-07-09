// src/components/QuestionNavigation.js
import React from 'react';

const QuestionNavigation = ({ currentQuestionIndex, totalQuestions, nextQuestion }) => {
  return (
    <div className="navigation-container">
      <button
        onClick={nextQuestion}
        disabled={currentQuestionIndex >= totalQuestions - 1}
      >
        Next
      </button>
    </div>
  );
};

export default QuestionNavigation;
