import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Result } from "./Result";
import { ResultData } from "./Result.data";

export default {
  title: "Views/Game/Result",
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

// story
export const Loader = Template.bind({});
Loader.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A8604",
  },
};
Loader.storyName = "Result loader";
Loader.args = { ...ResultData };

// One group
export const OneGroup = Template.bind({});
OneGroup.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=513%3A3954",
  },
};
OneGroup.storyName = "One group";
OneGroup.args = { ...ResultData };

// Two groups
export const TwoGroups = Template.bind({});
TwoGroups.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=517%3A4209",
  },
};
TwoGroups.storyName = "Two groups";
TwoGroups.args = { ...ResultData };
