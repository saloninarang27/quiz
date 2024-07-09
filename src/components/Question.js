// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ questionData, currentQuestionIndex, handleAnswer }) => {
  const { question, options } = questionData;
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswer(selectedOption);
  };

  return (
    <div className="question-container">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{question}</p>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index} className="option-container">
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleChange}
                required
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;
