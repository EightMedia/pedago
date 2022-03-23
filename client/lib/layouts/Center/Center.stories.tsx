import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Center } from "./Center";
import { CenterData } from "./Center.data";

export default {
  title: "Layouts/Center",
  component: Center,
} as ComponentMeta<typeof Center>;

const Template: ComponentStory<typeof Center> = (args) => <Center {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Center";
Primary.args = { ...CenterData };
