import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { InfoItem } from "./InfoItem";
import { InfoItemData } from "./InfoItem.data";

export default {
  title: "Components/InfoItem",
  component: InfoItem,
} as ComponentMeta<typeof InfoItem>;

const Template: ComponentStory<typeof InfoItem> = (args) => <InfoItem {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "InfoItem";
Primary.args = { ...InfoItemData };
