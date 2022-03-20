import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";

import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import HomeDisplay from "./components/HomeDisplay";

import Details from "./components/Details";
import { useSelector, useDispatch } from "react-redux";
import { setDetails } from "./actions";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isActive, setisActive] = useState(Boolean);

  const dispatch = useDispatch();

  const [isMovieClicked, setMovieClicked] = useState(Boolean);

  const getMovieRequest = async (searchValue) => {
    if (
      (searchValue === null) |
      (searchValue === undefined) |
      (searchValue === "") |
      (searchValue === " ")
    ) {
      setisActive(false);
      return;
    } else {
      setisActive(true);
    }

    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=9543cf78`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      console.log(responseJson.Search);
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const movie = useSelector((state) => state);

  return (
    <div className="container-fluid movie-app">
      <div className=" flexed">
        <h2 className="h">
          MOVIE<div className="hspan">FLIX</div>
        </h2>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      {isActive ? (
        <>
          {" "}
          {isMovieClicked ? (
            <Details files={movie} />
          ) : (
            <>
              <div className="row">
                <MovieList
                  movies={movies}
                  handleFavouritesClick={addFavouriteMovie}
                  favouriteComponent={AddFavourites}
                  execFn={() => setMovieClicked(true)}
                />
              </div>{" "}
            </>
          )}{" "}
        </>
      ) : (
        <HomeDisplay>s</HomeDisplay>
      )}

      <div className="row d-flex align-items-center mt-4 mb-4">
        <h2>Favourites</h2>
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default App;
