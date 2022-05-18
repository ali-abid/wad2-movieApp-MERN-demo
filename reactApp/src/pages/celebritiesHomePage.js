import React from "react";
import PageTemplate from "../components/templateCelebritiesListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getCelebrities } from "../api/tmdb-api";


const CelebritiesHomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery('celebrities', getCelebrities);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const celebrities = data.results;

  return (
    <>
      <PageTemplate
        title="Hollywood Celebrities"
        celebrities={celebrities}
      />
    </>
  );
};

export default CelebritiesHomePage;