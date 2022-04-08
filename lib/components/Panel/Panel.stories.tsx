import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Panel } from "./Panel";
import { PanelData } from "./Panel.data";
import { PanelTitle } from "./PanelTitle";

export default {
  title: "Components/Panel",
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => (
  <Panel {...args}>
    <PanelTitle>Panel Title</PanelTitle>
  </Panel>
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
Primary.storyName = "Panel";
Primary.args = { ...PanelData };
