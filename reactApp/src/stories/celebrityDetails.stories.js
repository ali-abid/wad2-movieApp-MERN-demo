import React from "react";
import CelebrityDetails from "../components/celebrityDetails";
import SampleData from "./celebritySampleData";

export default {
  title: "Celebrity Details Page/CelebrityDetails",
  component: CelebrityDetails,
};

export const Basic = () => <CelebrityDetails celebrity={SampleData} />;
Basic.storyName = "Default";