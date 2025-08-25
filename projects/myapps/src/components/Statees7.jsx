import React, { useState } from 'react'

function Statees7() {
    const [Status,setStatus] = useState(true);

    const change = () =>{
        setStatus(!Status)
    }
  return (
    <div>
      {Status && <h1>hi iam working</h1>}
      <button type='button' onClick={change}>{Status ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Statees7
