import React, { useState } from 'react';
import '../assets/CSS/questions.css';
import { QuestionData } from "../components/QuestionData";


export default function QuesAndAnswer() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
      if (nextQuestion < QuestionData.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
  };

  return (
  <div className="categContainer">
    <div className="questionsContainer">
      {showScore ? (
        <div className='score-section'>
        You scored {score} out of {QuestionData.length}
        </div>
        ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{QuestionData.length}
            </div>
            <div className='question-text'>{QuestionData[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {QuestionData[currentQuestion].answerOptions.map((answerOption) => (
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
          </div>
        </>
      )}
    </div>
  </div>
  )
}
