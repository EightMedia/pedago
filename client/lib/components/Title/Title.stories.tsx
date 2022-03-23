import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Title } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>Some title text</Title>
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
Primary.storyName = "Title";
