import React from "react";
import CelebrityList from "../components/celebrityList";
import SampleData from "./celebritySampleData";
import { MemoryRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";

export default {
  title: "Celebrity Details Page/CelebrityList",
  component: CelebrityList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

const celebrities= [SampleData, SampleData, SampleData, SampleData, SampleData]
export const Basic = () => <CelebrityList celebrities={celebrities} action={action} />;
Basic.storyName = "Default";