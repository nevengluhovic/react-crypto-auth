import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteCrypto from "./FavoriteCrypto";
import { v4 as uuidv4 } from "uuid";

const Favorites = ({
  favorites,
  setFavorites,
  recipes,
  setRecipes,
  logout,
}) => {
  const getLocalFavorite = () => {
    if (localStorage.getItem("favorites") === null) {
      localStorage.setItem("favorites", JSON.stringify([]));
    } else {
      let favoriteLocal = JSON.parse(localStorage.getItem("favorites"));
      setFavorites(favoriteLocal);
    }
  };

  const saveLocalFavorite = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  useEffect(() => {
    getLocalFavorite();
  }, []);

  useEffect(() => {
    saveLocalFavorite();
  }, [favorites]);
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/favorites">Favourites ({favorites.length})</Link>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
      <div className="dashboard">
        <Link to="/">
          <p>Go back to the login page</p>
        </Link>
      </div>

      <h1>Number of favorite crypto currencies: {favorites.length}</h1>

      {favorites.map((favorite) => (
        <FavoriteCrypto
          favorites={favorites}
          favorite={favorite}
          key={uuidv4()}
          id={uuidv4()}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default Favorites;
