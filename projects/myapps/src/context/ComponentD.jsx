import React from 'react'
import ComponentE from "./ComponentE"
function ComponentD({Username}) {
  return (
    <div>
      <h1>ComponentD</h1>
      <p>{Username}</p>
      <ComponentE Username={Username}/>
    </div>
  )
}

export default ComponentD
