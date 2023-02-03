import React, { useState } from "react";
import "./App.css";

function App() {
  //hide finalcard and question card
  const [showFinalCard, setFinalCard] = useState(false);
  const[score, setScore] = useState(0);
  const[currentQuestion, setQuestion]=useState(0);

  const questions = [
    {
      text: "Who am I",
      options: [
        { id: 0, text: "Susan Okoroafor", isCorrect: true },
        { id: 1, text: "Jane Doe", isCorrect: false },
        { id: 2, text: "Fetty Wap", isCorrect: false },
        { id: 3, text: "Jeff Bezos", isCorrect: false },
      ],
    },
    {
      text: "What languages do I know?",
      options: [
        { id: 0, text: "HTML,CSS", isCorrect: false },
        { id: 1, text: "Python", isCorrect: false },
        { id: 2, text: "Javascript", isCorrect: false },
        { id: 3, text: "All of the Above", isCorrect: true },
      ],
    },
    {
      text: "What coding software do I use?",
      options: [
        { id: 0, text: "Microsoft Word", isCorrect: false },
        { id: 1, text: "Windows Notepad", isCorrect: false },
        { id: 2, text: "VSCode", isCorrect: true },
        { id: 3, text: "Terminal", isCorrect: false },
      ],
    },
  ];
  
  const optionClicked = (isCorrect) =>{
    console.log(isCorrect)
    if(isCorrect){
      setScore(score+1);
    }
    if (currentQuestion + 1 < questions.length){
    setQuestion(currentQuestion+1);
    }
    else{
      setFinalCard(true);
    }
  }
  let finalScore = ((score/questions.length)*100)
  let roundScore = finalScore.toFixed(2)

  const restartQuiz=()=>{
    setScore(0)
    setQuestion(0)
    setFinalCard(false)
  }

  //the display, cards and questions
  return (
    <div className="App">
      <div className="bgImage">
        <div className="back"><a href="https://susnfor.me">&lt;-back</a></div>
        {/* Header  */}
        <h1>About Me Quiz</h1>
        {/* Scoring */}
        <h2>Current Score: {score}</h2>

        {showFinalCard ? (
          //Final Card
          <div className="finalCard">
            <h1>Final Results</h1>
            <h2>You got {score}/{questions.length} - {roundScore}%</h2>
            <button onClick={restartQuiz}>Again</button>
          </div>
        ) : (
          //Questions
          <div className="questionCard">
            <h2>Question {currentQuestion+1}/{questions.length}</h2>
            <h3 className="questionText">{questions[currentQuestion].text}</h3>
            <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
