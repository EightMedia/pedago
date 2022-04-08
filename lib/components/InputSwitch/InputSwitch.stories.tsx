import { ComponentMeta, ComponentStory } from "@storybook/react";
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
Unchecked.args = { ...InputSwitchData, checked: false };

// checked
export const Checked = Template.bind({});
Checked.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Checked.args = { ...InputSwitchData, checked: true };
