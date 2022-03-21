import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PlayerGroup } from "./PlayerGroup";
import { PlayerGroupData } from "./PlayerGroup.data";

export default {
  title: "Components/PlayerGroup",
  component: PlayerGroup,
} as ComponentMeta<typeof PlayerGroup>;

const Template: ComponentStory<typeof PlayerGroup> = (args) => (
  <PlayerGroup {...args} />
);

export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
  backgrounds: {
    default: "dark",
  },
};
Primary.storyName = "PlayerGroup";
Primary.args = { ...PlayerGroupData };
