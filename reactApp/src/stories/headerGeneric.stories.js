
import React from "react";
import GenericHeader from "../components/headerGeneric";

export default {
  title: "Generic Header/headerGeneric",
  component: GenericHeader,
};

export const Basic = () => <GenericHeader title={'Generic Header'} />;

Basic.storyName = "Default";