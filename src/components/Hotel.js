import React, { useState, useEffect } from "react";

const Hotel = ({ recipe, recipes, id }) => {
  const [favorites, setFavorites] = useState([]);
  const filteredRecipes = recipes.filter((el) => el.id === recipe.id);

  const addToFavs = () => {
    setFavorites(...favorites, filteredRecipes);
  };

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  return (
    <div>
      <div className="hotel">
        <h1>Currency Name: {recipe.name}</h1>
        <h2>Currency Price: {recipe.current_price}</h2>
        <button onClick={addToFavs}>Add to favorites</button>
      </div>
    </div>
  );
};

export default Hotel;