import React, { useState, createContext, useEffect } from "react";
import { getMovies } from "../api/movie-api";


export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({})
  const [favourites, setFavourites] = useState([]);
  const [watchLists, setWatchLists] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (authenticated) {
      getMovies().then(result => {
        console.log(result);
        setMovies(result);
      });
    }
  }, [authenticated]);


  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const addToWatchLists = (movie) => {
    let updatedWatchLists = [...watchLists];
    if (!watchLists.includes(movie.id)) {
      updatedWatchLists.push(movie.id);
    }
    setWatchLists(updatedWatchLists);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
    console.log(`inside remove favourites${favourites}`);
  };

  const removeFromWatchList = (movie) => {
    setWatchLists(watchLists.filter((mId) => mId !== movie.id));
    console.log(`remove watchlist ${watchLists}`)
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review })
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        watchLists,
        addToWatchLists,
        removeFromWatchList,
        movies,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;