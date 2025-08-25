import React, { useState } from 'react'

function StateEs4() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('');

	const handleAdd = ()=>{
		setCount(count - 1);
	}
	const handleSub = ()=>{
		setCount(count + 1);
	}
	const handleDisplay = ()=>{
		let input = prompt("Enter Name: ");
		setName(input);
	}

  return (
	<div>
		<h3>State Example 4 {name}</h3>
		<h4>Count: {count}</h4>
		<button type='button' onClick={handleAdd}>Add</button>
		<button type='button' onClick={handleSub}>Sub</button>
		<button type='button' onClick={handleDisplay}>Display Name</button>
	</div>
  )
}

export default StateEs4