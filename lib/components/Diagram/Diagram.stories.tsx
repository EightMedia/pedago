import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Diagram } from "./Diagram";
import { DiagramDataOneSet, DiagramDataTwoSets } from "./Diagram.data";

export default {
  title: "Components/Diagram",
  component: Diagram,
} as ComponentMeta<typeof Diagram>;

const Template: ComponentStory<typeof Diagram> = (args) => (
  <Diagram {...args} />
);

// One set
export const OneSet = Template.bind({});
OneSet.parameters = {
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
OneSet.storyName = "One dataset";
OneSet.args = { ...DiagramDataOneSet };

// Two sets
export const TwoSets = Template.bind({});
TwoSets.parameters = {
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
TwoSets.storyName = "Two datasets";
TwoSets.args = { ...DiagramDataTwoSets };
