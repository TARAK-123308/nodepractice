import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { themeContext } from '../App';

function ReciepeView() {
	const navigate= useNavigate();
	const {id} = useParams();
	const {reciepes} = useContext(themeContext);
	const item = reciepes.filter((item, index)=>(item.id == id))
	console.log(item);
	
	return (
	<div className='flex flex-col items-start'>
		<h1>{item[0].title} - Reciepe</h1>
		<h2>Title - {item[0].title}</h2>
		<h3>Description - {item[0].description} - Reciepe</h3>
		<ul>Ingredients: {item[0].ingred && item[0].ingred.map((item, index)=>(<li key={index}>{item}</li>))}</ul>
		<h3>{item[0].instr}</h3>
		<h3>{item[0].category}</h3>
		<button onClick={()=>navigate('/reciepes')}>Back to Reciepes</button>
	</div>
  )
}

export default ReciepeView