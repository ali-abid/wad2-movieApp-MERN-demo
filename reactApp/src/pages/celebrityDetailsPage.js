import React from "react";
import { useParams } from "react-router-dom";
import CelebrityDetails from "../components/celebrityDetails";
import PageTemplate from "../components/templateCelebrityPage";
import { getCelebrity } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const CelebrityDetailsPage = (props) => {
  const { id } = useParams();
  const { data: celebrity, error, isLoading, isError } = useQuery(
    ["celebrity", { id: id }],
    getCelebrity
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {celebrity ? (
        <>
          <PageTemplate celebrity={celebrity}>
            <CelebrityDetails celebrity={celebrity} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default CelebrityDetailsPage;