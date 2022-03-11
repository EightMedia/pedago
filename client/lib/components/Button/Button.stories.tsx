import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./Button";
import { ButtonData } from "./Button.data";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=344%3A628",
  },
};
Primary.storyName = "Button";
Primary.args = { ...ButtonData };
