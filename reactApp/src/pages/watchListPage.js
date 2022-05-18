import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/movie-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter } from "../components/movieFilterUI";
import WriteReview from "../components/cardIcons/writeReview";
import RemoveFromWatchList from "../components/cardIcons/removeFromWatchList";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
export const genreFiltering = {
  name: "genre",
  value: "0",
  condition: function (movie, value) {
    const genreId = Number(value);
    const genre_ids = movie.genres.map((g) => g.id);
    return genreId > 0 ? genre_ids.includes(genreId) : true;
  },
};

const WatchListPage = () => {
  const { watchLists: movieIds } = useContext(MoviesContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  // Create an array of queries and run in parallel.
  const watchListQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = watchListQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allWatchLists = watchListQueries.map((q) => q.data);
  const displayMovies = allWatchLists
    ? filterFunction(allWatchLists)
    : [];

  console.log(`Watch List Page movie id:  ${movieIds}`)
  console.log(`Display Movies:  ${displayMovies}`)



  const changeFilterValues = (type, value) => {
    const newf = { name: type, value: value };
    const newFilters =
      type === "title" ? [newf, filterValues[1]] : [filterValues[0], newf];
    setFilterValues(newFilters);
  };
  console.log(displayMovies)

  return (
    <>
      <PageTemplate
        title="Movies Watch List "
        movies={displayMovies}
        action={(movie) => {
          return (
            <>
              <RemoveFromWatchList movie={movie} />
              <WriteReview movie={movie} />
            </>
          );
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

export default WatchListPage;