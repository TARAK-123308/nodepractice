import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
	<div className=' p-2 border rounded-lg bg-zinc-500 flex flex-col'>
		<div className='flex justify-between'>
			<h2>Footer</h2>
		<ul className='flex gap-12'>
	        <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
		</ul>
		</div>
		<div className=' border rounded-lg bg-zinc-800 text-white'>
			<h2>CopyRight @ 2025 </h2>
		</div>
	</div>
  )
}

export default Footer