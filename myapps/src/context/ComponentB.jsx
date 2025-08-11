import React from 'react'
import ComponentC from "./ComponentC"
function ComponentB({Username}) {
  return (
     <div>
      <h1>ComponentB</h1>
      <p>{Username}</p>
      <ComponentC Username={Username}/>
    </div>
  )
}

export default ComponentB
