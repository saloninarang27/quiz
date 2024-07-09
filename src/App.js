// src/App.js
import React, { useState } from 'react';
import questions from './questions';
import Question from './components/Question';
import QuestionNavigation from './components/QuestionNavigation';
import Score from './components/Score';
import './App.css';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="app-container">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <>
          <Question
            questionData={questions[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            handleAnswer={handleAnswer}
          />
          <QuestionNavigation
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            nextQuestion={nextQuestion}
          />
        </>
      )}
    </div>
  );
};

export default App;
