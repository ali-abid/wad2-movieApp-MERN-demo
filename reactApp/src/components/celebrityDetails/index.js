import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
}));

const CelebrityDetails = (props) => {
  const classes = useStyles();
  const celebrity = props.celebrity

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {celebrity.biography}
      </Typography>
      <Typography variant="h6" component="p">
        {celebrity.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip label="Known As" className={classes.chipLabel} color="primary" />
          </li>
          {celebrity.also_known_as.map((g) => (
            <li key={g}>
              <Chip label={g} className={classes.chip} />
            </li>
          ))}
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip label="Place of Birth" className={classes.chipLabel} color="primary" />
          </li>
          <Chip label={celebrity.place_of_birth} className={classes.chip} />
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip label="Role in industry" className={classes.chipLabel} color="primary" />
          </li>
          <Chip label={celebrity.known_for_department} className={classes.chip} />
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip label="Popularity" className={classes.chipLabel} color="primary" />
          </li>
          <Chip label={celebrity.popularity} className={classes.chip} />
        </Paper>
      </div>
    </>
  );
};
export default CelebrityDetails;