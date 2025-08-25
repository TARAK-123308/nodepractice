import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
  return (
    <div className='items'>
      {recipes.map((recipes, index) => (
        <RecipeCard key={index} title={recipes.title} description={recipes.description} ingredients={recipes.ingredients} instructions={recipes.instructions}/>
      ))}
    </div>
  );
}

export default RecipeList;
