import React from 'react'
import { useNavigate } from 'react-router'

function ReciepeCard({title, category, description, id}) {
	const navigate = useNavigate();

	const handleClick = (id)=>{
		navigate(`/reciepes/${id}`)
	}
  return (
	<div className='flex flex-col border-1 p-3 w-75 bg-sky-100 'onClick={()=>handleClick(id)}>
		<h3 >{title}</h3>
		<h4>{category}</h4>
		<p>{description}</p>
	</div>
  )
}

export default ReciepeCard