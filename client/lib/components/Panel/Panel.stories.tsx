import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Panel } from "./Panel";
import { PanelData } from "./Panel.data";

export default {
  title: "Components/Panel",
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Panel";
Primary.args = { ...PanelData };
