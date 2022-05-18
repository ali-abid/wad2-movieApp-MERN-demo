import React from "react";
import PlayListAddIcon from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";

const PlayListIcon = ({ movie }) => {
  return (
    <Link
      to={{
        pathname: `/movies/watchList`,
        state: {
          movieId: movie.id,
        },
      }}
    >
      <PlayListAddIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default PlayListIcon;