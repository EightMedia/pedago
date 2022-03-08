import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Result } from "./Result";
import {
  ResultData,
} from "./Result.data";

export default {
  title: "Views/Result",
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Result";
Primary.args = { ...ResultData };
