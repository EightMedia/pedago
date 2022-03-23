import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Waiting } from "./Waiting";
import { WaitingData } from "./Waiting.data";

export default {
  title: "Views/Game/Waiting",
  component: Waiting,
} as ComponentMeta<typeof Waiting>;

const Template: ComponentStory<typeof Waiting> = (args) => (
  <Waiting {...args} />
);

// story
export const Primary = Template.bind({});
Primary.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A3793",
  },
};
Primary.storyName = "Waiting";
Primary.args = { ...WaitingData };
