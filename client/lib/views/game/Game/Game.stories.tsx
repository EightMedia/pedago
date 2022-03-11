import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Game } from "./Game";
import { gameData } from "./Game.data";
import { GameScenes } from "./Game.types";

export default {
  title: "Views/Game/Game",
  component: Game,
} as ComponentMeta<typeof Game>;

// Setting a “template” of how args map to rendering
const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

// Countdown
export const Countdown = Template.bind({});
Countdown.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A2840",
  },
};
Countdown.args = { ...gameData, initialScene: GameScenes.Countdown };

// Lead
export const Lead = Template.bind({});
Lead.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A3018",
  },
};
Lead.args = { ...gameData, initialScene: GameScenes.Lead };

// sort
export const Sorting = Template.bind({});
Sorting.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=542%3A3449",
  },
};
Sorting.args = { ...gameData, initialScene: GameScenes.Sort };

// autoplay
export const AutoPlay = Template.bind({});
AutoPlay.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=542%3A3449",
  },
};
AutoPlay.args = {
  ...gameData,
  autoPlay: true,
  initialScene: GameScenes.Countdown,
};
