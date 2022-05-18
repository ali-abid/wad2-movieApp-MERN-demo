import React from "react";
import CelebrityCard from "../celebrityCard";
import Grid from "@material-ui/core/Grid";

const CelebrityList = ( {celebrities, action }) => {
  let celebrityCards = celebrities.map((c) => (
    <Grid key={c.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <CelebrityCard key={c.id} celebrity={c} action={action} />
    </Grid>
  ));
  return celebrityCards;
};

export default CelebrityList;