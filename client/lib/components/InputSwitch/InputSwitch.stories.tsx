import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { InputSwitch } from "./InputSwitch";
import { InputSwitchData } from "./InputSwitch.data";

export default {
  title: "Components/InputSwitch",
  component: InputSwitch,
} as ComponentMeta<typeof InputSwitch>;

const Template: ComponentStory<typeof InputSwitch> = (args) => (
  <InputSwitch {...args} />
);

// unchecked
export const Unchecked = Template.bind({});
Unchecked.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Unchecked.storyName = "Unchecked";
Unchecked.args = { ...InputSwitchData, checked: false };

// checked
export const checked = Template.bind({});
checked.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
checked.storyName = "Checked";
checked.args = { ...InputSwitchData, checked: true };
