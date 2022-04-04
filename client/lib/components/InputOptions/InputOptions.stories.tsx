import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { InputOptions } from "./InputOptions";
import { InputOptionsData } from "./InputOptions.data";

export default {
  title: "Components/InputOptions",
  component: InputOptions,
} as ComponentMeta<typeof InputOptions>;

const Template: ComponentStory<typeof InputOptions> = (args) => (
  <InputOptions {...args} />
);

// multiple options
export const Multi = Template.bind({});
Multi.args = { ...InputOptionsData, multi: true };

// multiple options with preset
export const MultiWithPresetSelection = Template.bind({});
MultiWithPresetSelection.args = {
  ...InputOptionsData,
  multi: true,
  data: ["option1", "option3"],
};

// single option
export const Single = Template.bind({});
Single.args = { ...InputOptionsData, multi: false };

// single options with preset
export const singleWithPresetSelection = Template.bind({});
singleWithPresetSelection.args = {
  ...InputOptionsData,
  multi: false,
  data: ["option3"],
};
