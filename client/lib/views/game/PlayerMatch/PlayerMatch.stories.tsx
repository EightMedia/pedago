import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PlayerMatch } from "./PlayerMatch";
import {
  PlayerMatchDataThreePlayers,
  PlayerMatchDataTwoPlayers,
} from "./PlayerMatch.data";

export default {
  title: "Views/Game/PlayerMatch",
  component: PlayerMatch,
} as ComponentMeta<typeof PlayerMatch>;

const Template: ComponentStory<typeof PlayerMatch> = (args) => (
  <PlayerMatch {...args} />
);

// Two players
export const TwoPlayers = Template.bind({});
TwoPlayers.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A7019",
  },
};
TwoPlayers.args = { ...PlayerMatchDataTwoPlayers };

// Three players
export const ThreePlayers = Template.bind({});
ThreePlayers.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A7019",
  },
};
ThreePlayers.args = { ...PlayerMatchDataThreePlayers };
