import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PlayerMatch } from "./PlayerMatch";
import {
  PlayerMatchDataThreePlayers,
  PlayerMatchDataTwoPlayers,
} from "./PlayerMatch.data";
import { PlayerMatchSceneEnum } from "./PlayerMatch.types";

export default {
  title: "Views/Game/PlayerMatch",
  component: PlayerMatch,
} as ComponentMeta<typeof PlayerMatch>;

const Template: ComponentStory<typeof PlayerMatch> = (args) => (
  <PlayerMatch {...args} />
);

// Waiting
export const Waiting = Template.bind({});
Waiting.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=708%3A4531",
  },
};
Waiting.args = {
  ...PlayerMatchDataTwoPlayers,
  initialScene: PlayerMatchSceneEnum.Wait,
};

// Two players
export const TwoPlayers = Template.bind({});
TwoPlayers.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A7019",
  },
};
TwoPlayers.args = {
  ...PlayerMatchDataTwoPlayers,
  initialScene: PlayerMatchSceneEnum.Match,
};

// Three players
export const ThreePlayers = Template.bind({});
ThreePlayers.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A7019",
  },
};
ThreePlayers.args = {
  ...PlayerMatchDataThreePlayers,
  initialScene: PlayerMatchSceneEnum.Match,
};
