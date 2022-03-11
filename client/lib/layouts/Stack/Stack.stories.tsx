import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack } from "./Stack";
import { StackData } from "./Stack.data";

export default {
  title: "Layouts/Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

const DemoStack = () => {
  return (
    <>
      <div style={{ background: "blue", height: "30px" }}></div>
      <div style={{ background: "blue", height: "30px" }}></div>
      <div style={{ background: "blue", height: "30px" }}></div>
      <div style={{ background: "blue", height: "30px" }}></div>
      <div style={{ background: "blue", height: "30px" }}></div>
      <div style={{ background: "blue", height: "30px" }}></div>
    </>
  );
};

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Stack";
Primary.args = { children: DemoStack() };
