import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PlayerMatch } from "./PlayerMatch";
import { PlayerMatchData } from "./PlayerMatch.data";

export default {
  title: "Views/Game/PlayerMatch",
  component: PlayerMatch,
} as ComponentMeta<typeof PlayerMatch>;

const Template: ComponentStory<typeof PlayerMatch> = (args) => (
  <PlayerMatch {...args} />
);

// story
export const Primary = Template.bind({});
Primary.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A2780",
  },
};
Primary.storyName = "PlayerMatch";
Primary.args = { ...PlayerMatchData };
