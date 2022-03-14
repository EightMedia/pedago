import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Wizard } from "./Wizard";
import { WizardData } from "./Wizard.data";

export default {
  title: "Views/Admin/Wizard",
  component: Wizard,
} as ComponentMeta<typeof Wizard>;

const Template: ComponentStory<typeof Wizard> = (args) => <Wizard {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Wizard";
Primary.args = { ...WizardData };
