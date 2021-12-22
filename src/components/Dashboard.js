import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../components/firebase-config";
import { signOut } from "firebase/auth";
import axios, * as others from "axios";
import Hotel from "./Hotel";
import { v4 as uuidv4 } from "uuid";

const Dashboard = ({ favorites, setFavorites, recipes, setRecipes }) => {
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const logout = async () => {
    await signOut(auth);
  };

  const APP_ID = "b400f998";
  const APP_KEY = "d91b5e2b3b918422f7efbf17ca6894c4";

  const [loading, setLoading] = useState(false);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const response = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setLoading(false);
      setRecipes(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!loading) {
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
          <h1>Welcome to Dashboard, you're logged in!</h1>
          <Link to="/">
            <p>Go back to the login page</p>
          </Link>
        </div>
        <button onClick={fetchHotels} className="loadHotel">
          Load Currencies
        </button>
        {recipes.map((recipe) => (
          <Hotel
            key={uuidv4()}
            recipes={recipes}
            recipe={recipe}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
    );
  } else {
    return <h1>LOADING...</h1>;
  }
};

export default Dashboard;
