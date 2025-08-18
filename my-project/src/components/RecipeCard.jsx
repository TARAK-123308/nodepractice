import React from 'react';

function RecipeCard({ title, description, ingredients, instructions }) {
  return (
    <div className='recipecard'>
      <h2>{title}</h2>
      <p>{description}</p>

      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p>{instructions}</p>
    </div>
  );
}

export default RecipeCard;
