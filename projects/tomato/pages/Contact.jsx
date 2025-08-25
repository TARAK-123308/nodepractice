import React from 'react'
import { Outlet, useNavigate } from 'react-router'

function Contact() {
  const navigate = useNavigate();

  return (
	<div className='min-h-60'>
   
    <h1>Contact Page</h1>
    <Outlet />
    
    <button className='border-1' onClick={()=>navigate('/')}>back to Home</button>
  
  </div>
  )
}

export default Contact