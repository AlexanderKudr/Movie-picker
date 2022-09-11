import { useState } from "react";
import { MovieCard } from "./components/MovieCard";
import "./App.scss";
import SearchIcon from "./assets/search.svg";

const API_URL = "http://www.omdbapi.com?apikey=7ddbb20";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}&s=${search}`);
    const { Search } = await response.json();
    setMovies(Search);
  };

  const inputChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="app">
      <h1>MovieYay!</h1>
      <div className="search">
        <form
          onSubmit={(e) => {
            e.preventDefault(); //method prevent page refresh
            searchMovies(); //call function that you need
          }}
        >
          <input
            onChange={inputChangeHandler}
            placeholder="Search for movies"
          />
          <img src={SearchIcon} alt="search" onClick={searchMovies} />
        </form>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
