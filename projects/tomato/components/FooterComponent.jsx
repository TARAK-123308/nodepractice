import React from 'react'

function FooterComponent() {
  return (
	<div className='bg-zinc-500 flex flex-col'>
		<div className='flex justify-between'>
			<h2>Footer</h2>
		<ul className='flex gap-x-2'>
			<li>Home</li>
			<li>Services</li>
			<li>Contact</li>
		</ul>
		</div>
		<div className='bg-zinc-800 text-white'>
			<h2>CopyRight @ 2025 </h2>
		</div>
	</div>
  )
}

export default FooterComponent