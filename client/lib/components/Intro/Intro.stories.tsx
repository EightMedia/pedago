import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Intro } from "./Intro";
import { IntroData } from "./Intro.data";

export default {
  title: "Components/Intro",
  component: Intro,
} as ComponentMeta<typeof Intro>;

const Template: ComponentStory<typeof Intro> = (args) => <Intro {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Intro";
Primary.args = { ...IntroData };
