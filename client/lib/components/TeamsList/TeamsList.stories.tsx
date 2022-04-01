import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TeamsList } from "./TeamsList";
import { TeamsListData } from "./TeamsList.data";

export default {
  title: "Components/TeamsList",
  component: TeamsList,
} as ComponentMeta<typeof TeamsList>;

const Template: ComponentStory<typeof TeamsList> = (args) => (
  <TeamsList {...args} />
);

// story
export const Teams = Template.bind({});
Teams.parameters = {
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Teams.storyName = "List with teams";
Teams.args = { ...TeamsListData };

// story
export const Empty = Template.bind({});
Empty.parameters = {
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Empty.storyName = "List with no teams";
Empty.args = { ...TeamsListData, teams: [] };
