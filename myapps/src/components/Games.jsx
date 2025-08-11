import React, { useState } from 'react'

function Games() {
const [img1,setimage1] = useState(null)
const [img2,setimage2] = useState(null)
const [message, setMessage] = useState("");
const [count, setCount] = useState(0)

const Randomimamge = () =>{
      const id = Math.floor(Math.random() * 10) + 1;
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

  const click = ()=>{
  const images1 = Randomimamge();
  const images2 = Randomimamge();
  setCount(count+1);
  setimage1(images1)
  setimage2(images2)
  if(images1 === images2){
    setMessage("You won")
    setCount (count = 0)
  }

 }
  return (
    <div>
      <h1 className='hai'>Pokemon game</h1>
      <button type="button" onClick={click}>Try Your Luck</button>
      <div>
          {img1 && <img src={img1} alt="Pokemon 1" width="200" />}
          {img2 && <img src={img2} alt="Pokemon 2" width="200" />}
          {img1 && img2 && img1 === img2 && <h1>{message} in {count} attempts</h1>}
      </div>
    </div>
  )
  
}

export default Games
