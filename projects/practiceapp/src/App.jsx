import React from 'react'
import useCounter from './components/useCounter';
function App() {
    const { count, increment, decrement } = useCounter(10);
    console.log(count);

  return (

    <div>
       <h1>Count: {count}</h1>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>SUB</button>
    </div>
  )
}

export default App
