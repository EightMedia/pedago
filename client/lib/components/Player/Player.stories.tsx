import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Player } from "./Player";
import { PlayerData } from "./Player.data";

export default {
  title: "Components/Player",
  component: Player,
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Player";
Primary.args = { ...PlayerData };
