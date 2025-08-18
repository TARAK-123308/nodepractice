import React, { useState } from 'react';

function Forms({ onAddRecipe }) {
  const [title, setName] = useState('');
  const [description, setDesc] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !ingredients || !instructions) {
      alert("Please enter all the required data");
      return;
    }

    const obj = {
      title,
      description,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions
    };

    onAddRecipe(obj);    
    setName('');
    setDesc('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div >
      <form  className='recipe-form' onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='Enter Recipe Name' onChange={(e) => setName(e.target.value)} /><br />
        <input type="text" value={description} placeholder='Enter a description' onChange={(e) => setDesc(e.target.value)} /><br />
        <input type="text" value={ingredients} placeholder='Enter ingredients (comma separated)' onChange={(e) => setIngredients(e.target.value)} /><br />
        <input type="text" value={instructions} placeholder='Enter instructions' onChange={(e) => setInstructions(e.target.value)} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;
