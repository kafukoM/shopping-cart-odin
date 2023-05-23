import {React, useState , useEffect} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"
import './images.css'


export default function shopPage({addToCart}){

    const apiKey = "0703b8e4c9944818a0111f3838229308";

    const url = `https://api.rawg.io/api/games?page_size=12&key=${apiKey}`;
    
    const [games, setGames] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setGames(data.results);
            console.log(data.results)
        } catch (error) {
            console.log("Error fetching games:", error);
        }
    }
    fetchGames()
  }, [])

  return (
    <div>
      <NavBar></NavBar>
      <div className="cards-container">
        {games.map((game) => (
          <div key={game.id} className="card">
            <img src={game.background_image} alt={game.name} />
            <li>{game.name}</li>
            <ul className="genres-list">
              {game.genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
            <ul className="platforms-list">
              {game.platforms.map((platform, index) => (
                <li key={index}>{platform.platform.name}</li>
              ))}
            </ul>
            <button onClick={() => addToCart(game)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );

              }