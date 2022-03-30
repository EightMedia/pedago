import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { TeamsList } from "./TeamsList";
import { TeamsListData } from "./TeamsList.data";

export default {
  title: "Components/TeamsList",
  component: TeamsList,
} as ComponentMeta<typeof TeamsList>;

const Template: ComponentStory<typeof TeamsList> = (args) => <TeamsList {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "TeamsList";
Primary.args = { ...TeamsListData };
