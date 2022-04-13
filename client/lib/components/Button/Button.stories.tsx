import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./Button";
import { ButtonData } from "./Button.data";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    stretch: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=344%3A628",
  },
};

// Default
export const Default = Template.bind({});
Default.parameters = parameters;
Default.storyName = "Default";
Default.args = { ...ButtonData, variation: "default" };

// Line
export const Line = Template.bind({});
Line.parameters = parameters;
Line.storyName = "Line";
Line.args = { ...ButtonData, variation: "line" };

// Line
export const WhiteActive = Template.bind({});
WhiteActive.parameters = { ...parameters, backgrounds: { default: "dark" } };
WhiteActive.storyName = "WhiteActive";
WhiteActive.args = { ...ButtonData, variation: "whiteActive" };

// Line
export const WhiteBlocked = Template.bind({});
WhiteBlocked.parameters = { ...parameters, backgrounds: { default: "dark" } };
WhiteBlocked.storyName = "WhiteBlocked";
WhiteBlocked.args = { ...ButtonData, variation: "whiteBlocked" };

// Line
export const WhiteInactive = Template.bind({});
WhiteInactive.parameters = { ...parameters, backgrounds: { default: "dark" } };
WhiteInactive.storyName = "WhiteActive";
WhiteInactive.args = { ...ButtonData, variation: "whiteInactive" };
