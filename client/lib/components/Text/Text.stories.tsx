import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Text } from "./Text";
import { TextData } from "./Text.data";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam voluptates
    ullam omnis suscipit accusamus, inventore facere dolorem quasi, repellendus
    cum impedit nam optio sapiente nihil odit! Exercitationem cupiditate fugit
    voluptate!
  </Text>
);

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
