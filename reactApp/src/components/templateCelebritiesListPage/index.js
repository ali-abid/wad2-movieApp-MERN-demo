import React, { useState } from "react";
import Header from "../headerGeneric";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CelebrityList from "../celebrityList";
import CelebritiesSortCard from "../celebritiesSortCard";
import CelebritiesFilterCard from "../celebritiesFilterCard";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    minHeight: "100vh",
    paddingTop: theme.spacing(7),
  }
}));

function CelebritiesListPageTemplate({ celebrities, title, action }) {
  const classes = useStyles();
  const [filterName, setFilterName] = useState("");
  const [toggleSwitch, setToggleSwitch] = useState(true);


  const filter = celebrities.filter(celebrity => {
    return celebrity.name.toLowerCase().search(filterName.toLowerCase()) !== -1;;
  });

  const sort = celebrities.filter((a) => {
    return a.name.toLowerCase().search(filterName.toLowerCase()) !== -1;
  }).sort((a, b) => { return a.popularity - b.popularity });



  let filteringCelebrities = toggleSwitch ?
    sort :
    filter
    
  const handleChange = (type, value) => {
    if (type === "name") setFilterName(value);
    else setToggleSwitch(!toggleSwitch);
  };

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
            <CelebritiesFilterCard
              onUserInput={handleChange}   
            />
            <CelebritiesSortCard
              onSwitchChange={handleChange}
            />
          <CelebrityList action={action} celebrities={filteringCelebrities}></CelebrityList>
        </Grid>
      </Grid>

    </div>
  );
}
export default CelebritiesListPageTemplate;