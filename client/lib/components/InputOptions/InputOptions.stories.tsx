import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputOptions } from "./InputOptions";
import {
  inputOptionsDataMulti,
  inputOptionsDataSingle,
} from "./InputOptions.data";

export default {
  title: "Components/InputOptions",
  component: InputOptions,
  argTypes: {
    multi: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof InputOptions>;

const Template: ComponentStory<typeof InputOptions> = (args) => (
  <InputOptions {...args} />
);

// multiple options
export const EnumMulti = Template.bind({});
EnumMulti.args = inputOptionsDataMulti;

// single option
export const EnumSingle = Template.bind({});
EnumSingle.args = inputOptionsDataSingle;
