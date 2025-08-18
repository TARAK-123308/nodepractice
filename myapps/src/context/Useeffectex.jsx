import React, { useRef } from 'react'

function Useeffectex() {
    const countref = useRef(0);
    const handleClick = ()=>{
        countref.current +=1;
        console.log(countref.current);
    }
  return (
    <div>
        <h1>count : {countref.current}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Useeffectex
