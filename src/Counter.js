import { useState } from "react";

const Counter = ()=>
{

    let [score,setScore]=useState(0);
    
    const showMssg=()=>{
        alert("Can't go above 25");
    }

  

    return(
        <div className="counter_div">
            <h1>Counter App using States and Hooks in React</h1>
            <h2>{score}</h2>
            <div className="btn-div">
            <button className="btn" onClick={()=>{score<25 ? setScore(score+1):showMssg()}}>Increment</button>
            <button className="btn" onClick={()=>{setScore(score-1)}} disabled={score<=0 ? true:false}>Decrement</button>
            <button className="btn" onClick={()=>{setScore(0)}}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;