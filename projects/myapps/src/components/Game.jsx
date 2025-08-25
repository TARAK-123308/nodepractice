import React from 'react'

const Game = () => {
    let  s = prompt("Player 1 Enter your number : ");
    let w;
      while (true) {
    w = prompt("Player 2: Guess the number:");
    if (parseInt(s) === parseInt(w)) {
      break;
    }
  }
  return (
    <div>  
       <h1>You Won</h1>
    </div>
  )
}

export default Game
