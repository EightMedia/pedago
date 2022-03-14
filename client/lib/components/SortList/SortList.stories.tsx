import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SortList } from "./SortList";
import { SortListData } from "./SortList.data";

export default {
  title: "Components/SortList",
  component: SortList,
} as ComponentMeta<typeof SortList>;

const Template: ComponentStory<typeof SortList> = (args) => (
  <SortList {...args} />
);

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "SortList";
Primary.args = { ...SortListData };
