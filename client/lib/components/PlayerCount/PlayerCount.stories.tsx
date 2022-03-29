import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { PlayerCount } from "./PlayerCount";
import { PlayerCountData } from "./PlayerCount.data";

export default {
  title: "Components/PlayerCount",
  component: PlayerCount,
} as ComponentMeta<typeof PlayerCount>;

const Template: ComponentStory<typeof PlayerCount> = (args) => <PlayerCount {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "PlayerCount";
Primary.args = { ...PlayerCountData };
