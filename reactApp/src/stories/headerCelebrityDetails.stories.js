import React from "react";
import CelebrityDetailHeader from "../components/headerCelebrityDetails";
import SampleData from "./celebritySampleData";
import { MemoryRouter } from "react-router";

export default {
  title: "Celebrity Details Page/CelebrityDetailHeader",
  component: CelebrityDetailHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],  
};

export const Basic = () => <CelebrityDetailHeader celebrity={SampleData} />;
Basic.storyName = "Default";