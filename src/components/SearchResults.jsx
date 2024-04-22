// SearchResults.jsx
import React from 'react';
import RecipeCard from './RecipeCard';


function SearchResults() {
  return (
    <section>
      <h3>Search Results:</h3>
      <article>
        {filteredProducts.map((product) => (
          <RecipeCard key={product.id} product={product} />
        ))}
      </article>
    </section>
  );
}

export default SearchResults;