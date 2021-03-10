import "./styles.css";
import React,{useState} from "react";
import questions from "./Ques";
import imga from "./a.jpeg";


export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  function replay(){
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  }
 
  function handleClick(isCorrect){
    if(isCorrect){
      setScore(score+1);
    }
     var next=currentQuestion+1;
    if(next<questions.length){
        setCurrentQuestion(next);

    }
    else{
      setShowScore(true);

    }
    

  };
  
  return (
    <div className="app">
    
      {showScore?(<div className="score-card">
           
            <p className="txt">You scored {score} out of {questions.length} </p>
            
            <button className="replay" onClick={replay}>RESTART</button> 
  
             
    </div>)
:

  
       (
        
    
       <div className ="question-section">
       <div className="question-count">
      <img src={imga}/><span> Question {currentQuestion+1}/{questions.length}</span>
         </div>
         
         <div className='questions'>{questions[currentQuestion].questionText}</div>
         <div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((option)=>(
              <button onClick={()=>(handleClick(option.isCorrect))}>{option.answerText} </button>

            ))}
					</div>
         
         


       </div>)
}
     
    </div>
    
  );
  
  
}
