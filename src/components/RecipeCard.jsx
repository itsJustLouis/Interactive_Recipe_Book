import React from 'react';
//this function will display my recipes it works together with the seachbar jsx and it will also toggle the favourites depening on wether the button is pressed or not
const RecipeCard = ({ recipe, toggleFavorite }) => {
  const { id, productName, productImage, diet, cookingTime, isFavorite } = recipe;

  return (
    <section className="recipe-card">
      <img src={productImage} alt={productName} />
      <h3>{productName}</h3>
      <p>Diet: {diet}</p>
      <p>Cooking Time: {cookingTime}</p>
      <button onClick={() => toggleFavorite(id)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </section>
  );
};

export default RecipeCard;