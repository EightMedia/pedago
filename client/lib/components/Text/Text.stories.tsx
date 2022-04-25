import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Text } from "./Text";
import { TextData } from "./Text.data";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const params = {
  design: {
    type: "figma",
    url: "",
  },
};

// story
export const Primary = Template.bind({});
Primary.parameters = params;
Primary.storyName = "Text";
Primary.args = { ...TextData };
