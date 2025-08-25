import React, { useState } from 'react'

function Forms() {
    const [username,setUserName] = useState("")
    const [Password,setPassword] = useState("")


	const handleSubmit = (e)=>{
		e.preventDefault();
		if(!username && !Password){
			alert("Enter data")
		} else {
			const obj = {
				username : username,
				password : Password
			}
			console.log(obj);
			handleReset()
		}
		
	}
	const handleReset = ()=>{
		setUserName('');
		setPassword('')
	}

  return (
    <div className='Bye'>
      <form action="#" >
        <input type="text" value={username} placeholder='Enter Your Name bro '   onChange={(e)=>{setUserName((e.target.value))}} /> &nbsp;
        <input type="text" value={Password} placeholder='Enter Your Password bro' onChange={(e)=>{setPassword((e.target.value))}}/>
        <div>
        <br />
        <button type = "submit" onClick={handleSubmit}>Submit</button> &nbsp;
        <button type='reset' onClick={handleReset}>Reset</button>
        </div>


      </form>
    </div>
  )
}

export default Forms
