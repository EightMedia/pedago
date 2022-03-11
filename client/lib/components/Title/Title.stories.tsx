import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "./Title";
import { TitleData } from "./Title.data";

export default {
  title: "Components/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Title";
Primary.args = { ...TitleData };
