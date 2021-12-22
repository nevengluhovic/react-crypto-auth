import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Hotel = ({ recipe, recipes, setFavorites, favorites }) => {
  // const filteredRecipes = recipes.filter((el) => el.name === recipe.name);
  // const filteredRecipes = [recipe];

  const addToFavs = () => {
    setFavorites((oldFavorites) => [...oldFavorites, recipe]);
  };

  return (
    <div>
      <div className="hotel">
        <h1>Currency Name: {recipe.name}</h1>
        <h2>Currency Price: ${recipe.current_price.toLocaleString()}</h2>
        <button onClick={addToFavs}>Add to favorites</button>
      </div>
    </div>
  );
};

export default Hotel;
