import React, { useRef } from 'react'

function Userefex2() {
    const inputref = useRef('');
    const HandleSubmit = (e)=>{
    e.preventDefault();
    const obj = {
        name : inputref.current.value,
        city : "Hyd"
    }
    console.log(obj);
    inputref.current.value = " ";
    }
  return (
    <div>
        <form onSubmit={HandleSubmit}>
        <h1>Login Form</h1>
      <input type="text" ref={inputref} placeholder='Enter something'/>
      <button type='submit'>Clickme</button>
        </form>
     
    </div>
  )
}

export default Userefex2
