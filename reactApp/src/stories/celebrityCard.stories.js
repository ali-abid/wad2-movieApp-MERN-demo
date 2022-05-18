import React from "react";
import CelebrityCard from "../components/celebrityCard";
import SampleData from "./celebritySampleData";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Celebrity Page/CelebrityCard",
  component: CelebrityCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
  ],
};

export const Basic = () => {
  return (
    <CelebrityCard
      celebrity={SampleData}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleData, profile_path: undefined };
  return (
    <CelebrityCard
      celebrity={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";