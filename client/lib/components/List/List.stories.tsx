import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { List } from "./List";
import { ListData } from "./List.data";

export default {
  title: "Components/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "List";
Primary.args = { ...ListData };
