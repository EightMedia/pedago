import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { buttonDataPrimary, buttonDataSecondary } from "./Button.data";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// Setting a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.args = { ...buttonDataPrimary };

export const Secondary = Template.bind({});
Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/7S8INBaeuBypWPcWRw8jEB/RIJ-%E2%80%94-Design-system?node-id=25%3A359",
  },
};
Secondary.args = { ...buttonDataSecondary };
