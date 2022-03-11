import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PlayerGroup } from "./PlayerGroup";
import { PlayerGroupData } from "./PlayerGroup.data";

export default {
  title: "Components/PlayerGroup",
  component: PlayerGroup,
} as ComponentMeta<typeof PlayerGroup>;

const Template: ComponentStory<typeof PlayerGroup> = (args) => <PlayerGroup {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "PlayerGroup";
Primary.args = { ...PlayerGroupData };
