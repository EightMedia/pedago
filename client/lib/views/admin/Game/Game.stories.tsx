import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Game } from "./Game";
import { GameData, teamsBusy, teamsReady, teamsStart } from "./Game.data";
import { GameScene } from "./Game.types";

export default {
  title: "Views/Admin/Game",
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

const gameParams = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A9643",
  },
};

// onboarding
export const Onboarding = Template.bind({});
Onboarding.parameters = gameParams;
Onboarding.args = { ...GameData, initialScene: GameScene.Onboarding };

// game round
export const GameStart = Template.bind({});
GameStart.parameters = gameParams;
GameStart.args = {
  ...GameData,
  initialScene: GameScene.Round,
  teams: teamsStart,
};

// game round
export const GameBusy = Template.bind({});
GameBusy.parameters = gameParams;
GameBusy.args = {
  ...GameData,
  initialScene: GameScene.Round,
  teams: teamsBusy,
};

// game round
export const GameReady = Template.bind({});
GameReady.parameters = gameParams;
GameReady.args = {
  ...GameData,
  initialScene: GameScene.Round,
  teams: teamsReady,
};

// next round lead
export const NextRound = Template.bind({});
NextRound.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=618%3A4205",
  },
};
NextRound.storyName = "Next round";
NextRound.args = { ...GameData, initialScene: GameScene.Lead };
