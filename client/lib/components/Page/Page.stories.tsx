import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Page } from "./Page";
import { PageData } from "./Page.data";

export default {
  title: "Components/Page",
  component: Page,
  argTypes: {
    background: {
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>🤡</Page>
);

// story
export const Primary = Template.bind({});
Primary.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Page";
Primary.args = { ...PageData };
