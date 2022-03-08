import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Result } from "./Result";
import { ResultData } from "./Result.data";

export default {
  title: "Views/Admin/Result",
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Result";
Primary.args = { ...ResultData };
