import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Game } from "./Game";
import { GameData } from "./Game.data";
import { GameScene } from "./Game.types";

export default {
  title: "Views/Admin/Game",
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

// onboarding
export const Onboarding = Template.bind({});
Onboarding.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A9643",
  },
};
Onboarding.args = { ...GameData, initialScene: GameScene.Onboarding };

// game round
export const Primary = Template.bind({});
Primary.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A9643",
  },
};
Primary.storyName = "Game";
Primary.args = { ...GameData, initialScene: GameScene.Round };

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
