import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { TextTitle } from "./TextTitle";
import { TextTitleData } from "./TextTitle.data";

export default {
  title: "Components/TextTitle",
  component: TextTitle,
} as ComponentMeta<typeof TextTitle>;

const Template: ComponentStory<typeof TextTitle> = (args) => <TextTitle {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "TextTitle";
Primary.args = { ...TextTitleData };
