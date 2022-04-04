import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { InputOptions } from "./InputOptions";
import { InputOptionsData } from "./InputOptions.data";

export default {
  title: "Components/InputOptions",
  component: InputOptions,
} as ComponentMeta<typeof InputOptions>;

const Template: ComponentStory<typeof InputOptions> = (args) => <InputOptions {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "InputOptions";
Primary.args = { ...InputOptionsData };
