import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { PRODUCTS } from './RecipeList'; 

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [filteredDiet, setFilteredDiet] = useState('');
  const [recipes, setRecipes] = useState(PRODUCTS);

  const toggleFavorite = (id) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    );
    setRecipes(updatedRecipes);
  };

  const handleSearch = () => {
    setSearchHistory((prevHistory) => {
      if (!prevHistory.includes(searchTerm)) {
        return [searchTerm, ...prevHistory.slice(0, 2)];
      }
      return prevHistory;
    });
  };
//this will clear the filtered reciped
  const handleDietClick = (diet) => {
    if (diet === 'All') {
      setFilteredDiet('');
    } else {
      setFilteredDiet(diet);
    }
  };

  // this function will filter the recipes depending on what is searched
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filteredDiet ? recipe.diet === filteredDiet : true)
  );

  // this one will filter the favourites
  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

//belopw i will make a search bar and a search history that will display the last 3 items that were searched
//and i will also add buttons that will filter the diets using Onclick methods
  return (
    <section>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <section>
        <h3>Last 3 Searches:</h3>
        <ul>
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Diets:</h3>
        <button onClick={() => handleDietClick('kegogenic')}>Kegogenic</button>
        <button onClick={() => handleDietClick('dessert')}>Dessert</button>
        <button onClick={() => handleDietClick('vegan')}>Vegan</button>
        <button onClick={() => handleDietClick('All')}> All</button>
      </section>

      <section className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} toggleFavorite={toggleFavorite} />
        ))}
      </section>

      <section className="favorite-recipes">
        <h3>Favorite Recipes:</h3>
        {favoriteRecipes.length > 0 ? (
          <section className="recipe-list">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} toggleFavorite={toggleFavorite} />
            ))}
          </section>
        ) : (
          <p>No favorite recipes yet.</p>
        )}
      </section>
    </section>
  );
};

export default SearchComponent;
