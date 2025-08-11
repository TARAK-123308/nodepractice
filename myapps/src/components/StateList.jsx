import React, { useState } from 'react'

function StateList() {
	const [items, setItems] = useState(["Learn HTML","Learn CSS", "Learn BS"])
	const handleClick = ()=>setItems([...items, "New Item"]);
  return (
	<div>
		<ul>
			{items && items.map((item, index)=>(<li key={index}>{item}</li>))}
		</ul>
		<button type='button' onClick={handleClick}>Add Task</button>
	</div>
  )
}

export default StateList