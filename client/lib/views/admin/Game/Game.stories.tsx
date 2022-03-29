import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Game } from "./Game";
import { GameData } from "./Game.data";

export default {
  title: "Views/Admin/Game",
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

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
Primary.args = { ...GameData };

// confirm skip
export const ConfirmSkip = Template.bind({});
ConfirmSkip.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=618%3A4525",
  },
};
ConfirmSkip.storyName = "Confirm skip round";
ConfirmSkip.args = { ...GameData };

// next round teaser
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
NextRound.args = { ...GameData };
