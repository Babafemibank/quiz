import React from 'react'
const Scores = ({showScore,setShowScore,setShowSubmitPage}) => {
 
const handleShowScore = () => {
  setShowScore(true);
  setShowSubmitPage(false)
  if(showScore){
    setShowSubmitPage(false)
  }

  
}

return (
  <div className='submission'>
  <h2>Congratulations! You have come to the end of this Quiz.</h2>  
 <button onClick={handleShowScore}>show scores</button>
 </div>
   )
}

export default Scores