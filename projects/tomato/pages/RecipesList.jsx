import React, { useContext } from 'react'
import { themeContext } from '../App'
import ReciepeCard from '../components/ReciepeCard'

function RecipesList() {
	const {reciepes} = useContext(themeContext);
  return (
	<div className='min-h-60'>
		<h1>RecipesList</h1>
		<div className='flex flex-wrap gap-4'>
			{reciepes.map((item, index)=>(<ReciepeCard key={index} {...item} />))}
		</div>
	</div>
  )
}

export default RecipesList