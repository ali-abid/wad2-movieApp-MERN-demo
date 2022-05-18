import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import WatchListIcon from "@material-ui/icons/PlaylistAdd";

const AddToWatchListsIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchLists = (e) => {
    e.preventDefault();
    context.addToWatchLists(movie);
  };
  return (
    <IconButton aria-label="add to watchList" onClick={handleAddToWatchLists}>
      <WatchListIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchListsIcon;