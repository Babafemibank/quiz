import React, {useEffect, useState} from "react"
import Scores from './scores'
function App() {
const questions = [
  
  {id:1,
questionText: "which of these is not a fundamental S.I unit?",
answerOptions: [
  {answerText: 'metre', isCorrect: false, id:1},
  {answerText: 'ampere', isCorrect: false, id:2},
  {answerText: 'kelvin', isCorrect: false, id:3},
  {answerText: 'radian', isCorrect: true, id:4},]
  },
  {id:2,
    questionText: "which of these is a derieved unit",
    answerOptions:[
      {answerText: 'kelvin',id:1, isCorrect: false},
      {answerText: 'metre',id:2, isCorrect: false},
      {answerText: 'newton',id:3, isCorrect: true},
      {answerText: 'kg',id:4, isCorrect: false},
    ]
  },

  {id:3,
    questionText: 'which of the following is a fundamental unit',
    answerOptions:[
      {answerText: 'newton',id:1, isCorrect: false},
      {answerText:'joule',id:2, isCorrect: false},
      {answerText: 'watt',id:3, isCorrect: false},
      {answerText:'ampere',id:4, isCorrect: true},
    ]
  },

  {id:4,
    questionText: "which of the following is equivalent to kgms^-1",
    answerOptions:[
      {answerText: 'ns^-1',id:1, isCorrect: false},
      {answerText: 'nms',id:2, isCorrect: false},
      {answerText: 'ns',id:3, isCorrect: true},
      {answerText: 'js^-1',id:4, isCorrect: false},
    ]
  },

  {id:5,
    questionText: "the physical quantity that has the same dimension as impulse is?",
    answerOptions:[
      {answerText: 'energy',id:1, isCorrect: false},
      {answerText: 'momentum',id:2, isCorrect: true},
      {answerText: 'suface tension',id:3, isCorrect: false},
      {answerText: 'pressure',id:4, isCorrect: false},
    ]
  },

  {id:6,
    questionText: "the dimension of surface tension are",
    answerOptions:[
      {answerText: 'MT^2L^-1',id:1, isCorrect: false},
      {answerText: 'M^-1T^-2L^-1',id:2, isCorrect: false},
      {answerText: 'MT^-2',id:3, isCorrect: true},
      {answerText: 'M^2T^-2',id:4, isCorrect: false},
    ]
  },
  {id:7,
    questionText: "calculate the energy released when 0.005g of mass is lost in a nuclear energy reactor [c=3x10^8 ms-1]",
    answerOptions:[
      {answerText: '4.5x10^11 J',id:1, isCorrect: true},
      {answerText: '4.5x10^14 J',id:2, isCorrect: false},
      {answerText: '1.5x10^11 J',id:3, isCorrect: false},
      {answerText: '1.5x10^7 J',id:4, isCorrect: false},
    ]
  },
  {id:8,
    questionText: "graphite is exploited commercially for the following reasons except",
    answerOptions:[
      {answerText: "its inertness",id:1, isCorrect: false},
      {answerText: 'high termal stability',id:2, isCorrect: false},
      {answerText: 'hardness',id:3, isCorrect: true},
      {answerText: 'thermal conductivities',id:4, isCorrect: false},
    ]
  },
  {id:9,
    questionText: "group IA metal are called",
    answerOptions:[
      {answerText: 'alkali metal',id:1, isCorrect: true},
      {answerText: 'alkali earth metal',id:2, isCorrect: false},
      {answerText: 'halo metal',id:3, isCorrect: false},
      {answerText: 'metalloid',id:4, isCorrect: false},
    ]
  },
  {id:10,
    questionText: "nucleons are?",
    answerOptions:[
      {answerText: 'electrons + neutrons',id:1, isCorrect: false},
      {answerText: 'protons + electrons',id:2, isCorrect: false},
      {answerText: 'protons + neutrons',id:3, isCorrect: true},
      {answerText: 'protons + electrons + neutrons',id:4, isCorrect: false},
    ]
  },
  {
    questionText: "a body starts from rest and move with a constant acceleration. which of the following quantities vary/varies linearly with the square of the time? \[I\]Velocity \[II\]Displacement \[III\]Momentum",
    answerOptions: [
      {answerText: 'I only', isCorrect: false},
      {answerText: 'II only', isCorrect: true},
      {answerText: 'III only', isCorrect: false},
      {answerText: 'i and II only', isCorrect: false},]
      },
      
  {
    questionText: "a train has an initial velocity of 44m/s and acceleration of -4m/s^2. its velocity after 10secs is? ",
    answerOptions:[
      {answerText: '2m/s', isCorrect: false},
      {answerText: '4m/s', isCorrect: true},
      {answerText: '8m/s', isCorrect: false},
      {answerText: '12m/s',isCorrect: false},
    ]
  },

  {
    questionText: 'a body accelerate uniformly from rest at 2ms^2. calculate its velocity after travelling 9m',
    answerOptions:[
      {answerText: '36m/s', isCorrect: false},
      {answerText:'18m/s', isCorrect: false},
      {answerText: '4.5m/s', isCorrect: false},
      {answerText:'6m/s', isCorrect: true},
    ]
  },

  {
    questionText: "a body falls from rest to the ground in 0.5s. calculate the height from which it falls",
    answerOptions:[
      {answerText: '0.123m', isCorrect: false},
      {answerText: '0.5m', isCorrect: false},
      {answerText: '1.0m', isCorrect: false},
      {answerText: '1.23m', isCorrect: true},
    ]
  },

  {
    questionText: "a motor vehicle is brought to rest from a speed of 15m/s in 2secs. calculate the retardation",
    answerOptions:[
      {answerText: '0.75m/s^2', isCorrect: false},
      {answerText: '1.33m/s^2', isCorrect: false},
      {answerText: '5.625m/s^2', isCorrect: true},
      {answerText: '7.50m/s^2', isCorrect: false},
    ]
  },

  {
    questionText: "a student found out from a simple pendulum experiment that 20 oscillations were completed in 38seconds. what is the period of oscillation of the pendulum ",
    answerOptions:[
      {answerText: '8.0s', isCorrect: false},
      {answerText: '3.8s', isCorrect: false},
      {answerText: '1.9s', isCorrect: true},
      {answerText: '0.5s', isCorrect: false},
    ]
  }, 
{
questionText: "a simple pendulum with a period of 2.0s has it length doubled. its new period is?",
answerOptions: [
  {answerText: '1.00s', isCorrect: false},
  {answerText: '1.41s', isCorrect: false},
  {answerText: '2.83s', isCorrect: true},
  {answerText: '4.00s', isCorrect: false},]
  },
 {
questionText: "the length of a displaced pendulum bob which passes its lowest point twice every seconds is. taking(g=10m/s^2)",
answerOptions: [
  {answerText: '0.40m', isCorrect: true},
  {answerText: '0.45m', isCorrect: false},
  {answerText: '0.58m', isCorrect: false},
  {answerText: '1.0m', isCorrect: false},]
  },
 {
questionText: "an object if a mass of 15kg is whirled round in a vertical circle of radius 3m with a constant speed of 4.5m/s. find the maximum tension in the string (g=10m/s^2)  ",
answerOptions: [
  {answerText: '101.3N', isCorrect: false},
  {answerText: '179.5N', isCorrect: false},
  {answerText: '202.5N', isCorrect: false},
  {answerText: '251.3N', isCorrect: true},]
  },
 {
questionText: "the friction which operates when one solid surface slides over another is called",
answerOptions: [
  {answerText: 'solid friction', isCorrect: false},
  {answerText: 'static friction', isCorrect: false},
  {answerText: 'limiting friction', isCorrect: false},
  {answerText: 'dynamic friction', isCorrect: true},]
  }
];
const [selectedData, setSelectedData] = useState([]);
useEffect(()=> {
  const shuffleData = shuffleArray(questions);
  setSelectedData(shuffleData.slice(0,15));
},[])
const shuffleArray = (arr) => {
  for(let i = arr.length -1; i >0; i--){
    const j = Math.floor(Math.random()*(i + 1));
    [arr[i],arr[j]] = [arr[j],arr[i]]
  }
  return arr;
}

const [currentQuestion, setCurrentQuestion] = useState(-1);
const [showScore, setShowScore] = useState(false)
const [score, setScore] = useState(0);
const[time, setTime] = useState(7*60);
const[showWelcome, setShowWelcome] = useState(true);
const [showSubmitPage, setShowSubmitPage] = useState(false);
const [selectedAnswers,setSelectedAnswers] =useState({})

useEffect(()=>{
  if(!showWelcome&&!showSubmitPage){
 let interval = setInterval(()=>{
    if(time>0){
     if(time===3*60){
      setTimeout(()=>{
        alert('you have 3 minutes left!');
      })
     } 
setTime(prevTime => prevTime-1);
}
if(time===0){
  setShowSubmitPage(true)
  calculateScore()
} if(showScore){
  setShowSubmitPage(false)
  calculateScore()
}
 else{
  clearInterval(interval);
}
  },1000);
  
  return () => clearInterval(interval);
}},[time,showScore,showWelcome,showSubmitPage]);

const minutes = Math.floor(time/60);
const seconds = time % 60;

const handleStart = () =>{
  setShowWelcome(false)
  setCurrentQuestion(0)
}

const handleNextQuestion = () =>{
if(currentQuestion<selectedData.length-1){
  setCurrentQuestion((prevQues)=> prevQues+1)}
}

const handlePreviousQuestion = () =>{
   if(currentQuestion >0){
    setCurrentQuestion(currentQuestion-1)}
}

const handleChange = (e) => {
  const {value} = e.target;
   setSelectedAnswers((prevAnswer)=>({...prevAnswer,
  [currentQuestion]: value}));
  };

const handleSubmit = (e)=> {
e.preventDefault()
    const confirmed = window.confirm('are you sure you want to submit?')
    if(confirmed){
      setShowSubmitPage(true)
      calculateScore()
    }else{
      alert('submission cancelled')
    }
  }

const calculateScore = () =>{
  let newscore = 0;
  selectedData.forEach((question,index) => {
    const selectedAnswer = selectedAnswers[index];
    const correctAnswer = question.answerOptions.find((option)=>option.isCorrect);
    if(selectedAnswer&&selectedAnswer===correctAnswer.answerText){
      newscore +=1;
    }
  });
  setScore(newscore)
}
const handleRestart =()=>{
 window.location.reload()
}
  return (
    <div className="App">
      
      {!showSubmitPage&& !showScore && (<div>
       
        {showWelcome&&(<div className="welcome">
          <h2>welcome! you have 7 minutes to answer 15 questions</h2>
          <button onClick={handleStart}>start quiz</button>
        </div>)}
        {!showWelcome && (<div className="quiz_section">
          <div className="time"><h2>{`${minutes}:${seconds < 10? '0' : ''}${seconds}`}</h2></div>
          <div className="question-count">
      <span>Question {currentQuestion + 1}</span>/{selectedData.length}</div>
      <div className="ques">
     <h2>{selectedData[currentQuestion].questionText}</h2> 
      <div>
         
              <form>
            {selectedData[currentQuestion].answerOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name="answer"
                  value={option.answerText}
                  checked={selectedAnswers[currentQuestion] === option.answerText}
                  
                  onChange={handleChange}
                />
                <label htmlFor={`option${index}`}>{option.answerText}</label>
              </div>
            ))}
          </form>
          </div></div>
           <div className="buttons">
            <button onClick={handlePreviousQuestion}>previous question</button>
            <button onClick={handleNextQuestion} > next question</button>
            <button  onClick={handleSubmit}>submit</button></div></div>)}
      </div>)}
      
     {showSubmitPage && <Scores setShowScore={setShowScore} setShowSubmitPage={setShowSubmitPage} showScore={showScore}/>} 
   
{showScore &&(
  <div className="score">
   <h2> You Scored {score} out of {selectedData.length}</h2>
   <button onClick={handleRestart}>Restart</button>
  </div>
)}
    </div>
  );}















export default App;
//export {scorePage}