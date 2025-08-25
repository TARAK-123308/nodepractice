import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function FunC() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(10);

    useEffect(()=>{
        console.log("Component mounted...");  
    },[count1])

  return (
    <div className='border-2 m-3 p-3 bg-sky-900 text-white border-red rounded-xl'>
        <h3>Example of Functional Component {count}</h3>
        <button className = 'text-white border px-3 rounded-lg' onClick={()=>setCount(count + 1)}>Add</button>
        <button className = 'text-white border px-3 rounded-lg' onClick={()=>setCount1(count1 + 1)}>Add</button>
    </div>
  )
}

export default FunC