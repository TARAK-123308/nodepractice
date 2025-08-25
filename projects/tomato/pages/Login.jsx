import React, { useContext } from 'react'
import { themeContext } from '../App'
import {useNavigate} from 'react-router-dom'

export function Login() {
  const navigate = useNavigate();
  const {setIsLoggedIn, isLoggedIn } = useContext(themeContext);
    const handleBtn= ()=>{
      if(!isLoggedIn){
        setIsLoggedIn(!isLoggedIn)
        navigate('/');
      } else{
        setIsLoggedIn(!isLoggedIn)
      }
    }
  return (
	<div className='min-h-60'>
    <h2>{isLoggedIn ? "Welcome..": "Login"}</h2>
    
    <button onClick={handleBtn}>{isLoggedIn ? "Logout": " Login"}</button>
  </div>
  )
}
