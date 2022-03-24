import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Diagram } from "./Diagram";
import { DiagramData } from "./Diagram.data";

export default {
  title: "Components/Diagram",
  component: Diagram,
} as ComponentMeta<typeof Diagram>;

const Template: ComponentStory<typeof Diagram> = (args) => (
  <Diagram {...args} />
);

// story
export const Primary = Template.bind({});
Primary.parameters = {
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Diagram";
Primary.args = { ...DiagramData };
