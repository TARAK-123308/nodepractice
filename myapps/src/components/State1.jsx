import React from 'react'

function State1(){
    let count = 0;
    const HandleClick = function(){
         count += 1;
         console.log(count);        
    }
  return (
    <div>
       <h3>Count: {count}</h3>
			<button type="button" onClick={HandleClick}>Add</button>
    </div>
  )
}

export default State1
