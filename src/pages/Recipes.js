
import React from 'react';
import SearchBar from '../components/SearchBar';

//this is for the search bar so it can be displayed
function Recipes() {
  return (
    <section>
      <h1>Recipe Search</h1>
      <p>Scroll down to see Favourites</p>
      <SearchBar />

    </section>
  );
}

export default Recipes;