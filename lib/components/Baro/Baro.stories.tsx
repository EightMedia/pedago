import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Baro } from "./Baro";
import { BaroData } from "./Baro.data";

export default {
  title: "Components/Baro",
  component: Baro,
} as ComponentMeta<typeof Baro>;

const Template: ComponentStory<typeof Baro> = (args) => <Baro {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Baro";
Primary.args = { ...BaroData };
