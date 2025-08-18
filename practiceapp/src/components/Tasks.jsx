import React, { useState } from 'react';

function Tasks() {
  const [Tasks, setTasks] = useState([]);   
  const [input, setInput] = useState(''); 
    

  const Tasksnumbers = (e) => {
    setInput(e.target.value);
  };

  const Handleclick = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTasks([...Tasks, input]); 
      setInput('');               
    }
  };
   const deleteTask = (index) => {
    setTasks(Tasks.filter((_, i) => i !== index));
  };

  return (
    <div className='borders'>
        <h1>To-DoList</h1>
      <form>
        <input id="input"type="text" value={input} placeholder="Set your task" onChange={Tasksnumbers}/>&nbsp;
        <button onClick={Handleclick}>Add Task</button>
      </form>
      <hr />
      <ul className='decoration'>
        {Tasks.map((Task, index) => (
          <li key={index}><span>{Task}</span> <span><button className='buttons' onClick={()=>{deleteTask(index)}}>Delete</button></span></li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
