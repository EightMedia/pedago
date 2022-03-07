import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Game } from "./Game";
import {
  gameDataCountdown,
  gameDataLead,
  gameDataMatching,
  gameDataSorting,
} from "./Game.data";

export default {
  title: "Views/Game",
  component: Game,
} as ComponentMeta<typeof Game>;

// Setting a “template” of how args map to rendering
const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

// Matching
export const Matching = Template.bind({});
Matching.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A2840",
  },
};
Matching.args = { ...gameDataMatching };

// Countdown
export const Countdown = Template.bind({});
Countdown.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A2840",
  },
};
Countdown.args = { ...gameDataCountdown };

// Lead
export const Lead = Template.bind({});
Lead.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A2840",
  },
};
Lead.args = { ...gameDataLead };

// Each story then reuses that template
export const Sorting = Template.bind({});
Sorting.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=542%3A3449",
  },
};
Sorting.args = { ...gameDataSorting };
