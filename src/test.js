import React from "react";
import { useState } from "react";
const ButtonComponent = ({id,handleButtonClick,disabled}) =>{
 
    return(
<button onClick={()=>handleButtonClick(id) } disabled={disabled}> Button{id}</button>

    )
}



const Test = () =>{
    const[clickedButton, setClickedButton] = useState([])
    const handleButtonClick = (id) =>{
        if(!clickedButton.includes(id)){
            setClickedButton([...clickedButton, id])
        }
    }
    const isButtonDisabled = (id) =>{
        return clickedButton.includes(id);
}


return(
   <div>
    {[1,2,3,4,5].map((id)=>(<ButtonComponent key={id} id={id}
   handleButtonClick={handleButtonClick}
   disabled={isButtonDisabled(id)}/>))}

   </div>

   

)
}
export default Test