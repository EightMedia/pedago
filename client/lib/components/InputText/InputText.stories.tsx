import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputText } from "./InputText";
import { InputTextData } from "./InputText.data";

export default {
  title: "Components/InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

// story
export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Default.storyName = "Default";
Default.args = { ...InputTextData };

// error
export const Invalid = Template.bind({});
Invalid.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Invalid.storyName = "Invalid";
Invalid.args = { ...InputTextData, error: "The field has a lorem ipsum error" };
