import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Discuss } from "./Discuss";
import { DiscussData } from "./Discuss.data";

export default {
  title: "Views/Game/Discuss",
  component: Discuss,
} as ComponentMeta<typeof Discuss>;

const Template: ComponentStory<typeof Discuss> = (args) => (
  <Discuss {...args} />
);

// story
export const Primary = Template.bind({});
Primary.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Discuss";
Primary.args = { ...DiscussData };
