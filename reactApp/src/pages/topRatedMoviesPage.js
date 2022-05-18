import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/movie-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import AddToWatchListsIcon from '../components/cardIcons/addToWatchLists'
import PlayList from "../components/cardIcons/playList";

import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const TopRatedMovies = (props) => {
  // Used react-query for caching the movies data in the browser
  const { data, error, isLoading, isError } = useQuery("top-rated", getTopRatedMovies);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const changeFilterValues = (type, value) => {
    const newf = { name: type, value: value };
    const newFilters =
      type === "title" ? [newf, filterValues[1]] : [filterValues[0], newf];
    setFilterValues(newFilters);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate
        title="Top Rated Movies"
        movies={displayedMovies}
        action={(movie) => {
          return <AddToWatchListsIcon movie={movie} />
        }}
      />
      <MovieFilterUI
        filterInputChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};
export default TopRatedMovies;