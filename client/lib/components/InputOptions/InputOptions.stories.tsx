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
export const EnumMulti = Template.bind({});
EnumMulti.args = { ...InputOptionsData, multi: true };

// multiple options with preset
export const EnumMultiWithPresetSelection = Template.bind({});
EnumMultiWithPresetSelection.args = {
  ...InputOptionsData,
  multi: true,
  data: [2, 4],
};

// single option
export const EnumSingle = Template.bind({});
EnumSingle.args = { ...InputOptionsData, multi: false };

// single options with preset
export const EnumsingleWithPresetSelection = Template.bind({});
EnumsingleWithPresetSelection.args = {
  ...InputOptionsData,
  multi: false,
  data: [3],
};
