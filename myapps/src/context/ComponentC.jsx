import React from 'react'
import ComponentD from "./ComponentD"
function ComponentC({Username}) {
  return (
    <div>
      <h1>ComponentC</h1>
      <p>{Username}</p>
      <ComponentD Username={Username}/>
    </div>
  )
}

export default ComponentC
