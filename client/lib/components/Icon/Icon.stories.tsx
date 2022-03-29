import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Icon } from "./Icon";
import { IconData } from "./Icon.data";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Icon";
Primary.args = { ...IconData };
