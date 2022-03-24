import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Loader } from "./Loader";
import { LoaderData } from "./Loader.data";

export default {
  title: "Components/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Loader";
Primary.args = { ...LoaderData };
