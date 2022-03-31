import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Timer } from "./Timer";
import { TimerData } from "./Timer.data";

export default {
  title: "Components/Timer",
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Timer";
Primary.args = { ...TimerData };
