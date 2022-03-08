import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "./Page";
import {
  PageData,
} from "./Page.data";

export default {
  title: "Components/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Page";
Primary.args = { ...PageData };
