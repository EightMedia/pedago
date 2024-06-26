import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
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
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Primary.args = TitleData;
Primary.storyName = "Title";
