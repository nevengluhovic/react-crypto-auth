import React from "react";

const favoriteCrypto = ({
  favorites,
  setFavorites,
  recipes,
  setRecipes,
  logout,
  favorite,
}) => {
  const deleteCrypto = () => {
    setFavorites(favorites.filter((el) => el.id !== favorite.id));
  };
  return (
    <div>
      <div className="hotel">
        <h1>Currency Name: {favorite.name}</h1>
        <h2>Currency Price: {favorite.current_price}</h2>
        <button onClick={deleteCrypto}>Delete</button>
      </div>
    </div>
  );
};

export default favoriteCrypto;
