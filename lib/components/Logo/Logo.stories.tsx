import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Logo } from "./Logo";
import { LogoData } from "./Logo.data";

export default {
  title: "Components/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Logo";
Primary.args = { ...LogoData };
