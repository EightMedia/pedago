import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Result } from "./Result";
import { ResultData } from "./Result.data";

export default {
  title: "Views/Admin/Result",
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

// loader
export const Loader = Template.bind({});
Loader.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Loader.storyName = "Result";
Loader.args = { ...ResultData };

// results for single group
export const ResultOneGroup = Template.bind({});
ResultOneGroup.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=519%3A9017",
  },
};
ResultOneGroup.storyName = "Result";
ResultOneGroup.args = { ...ResultData };

// results for two groups
export const ResultTwoGroups = Template.bind({});
ResultTwoGroups.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=519%3A9017",
  },
};
ResultTwoGroups.storyName = "Result";
ResultTwoGroups.args = { ...ResultData };
