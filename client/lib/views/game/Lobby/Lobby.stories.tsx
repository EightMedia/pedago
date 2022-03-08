import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Lobby } from "./Lobby";
import { LobbyData } from "./Lobby.data";

export default {
  title: "Views/Game/Lobby",
  component: Lobby,
} as ComponentMeta<typeof Lobby>;

const Template: ComponentStory<typeof Lobby> = (args) => <Lobby {...args} />;

// one group
export const OneGroup = Template.bind({});
OneGroup.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=459%3A2532",
  },
};
OneGroup.storyName = "One group";
OneGroup.args = { ...LobbyData };

// two groups
export const TwoGroups = Template.bind({});
TwoGroups.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=459%3A1927",
  },
};
TwoGroups.storyName = "One group";
TwoGroups.args = { ...LobbyData };
