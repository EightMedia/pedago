import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Lobby } from "./Lobby";
import { LobbyData } from "./Lobby.data";

export default {
  title: "Views/Admin/Lobby",
  component: Lobby,
} as ComponentMeta<typeof Lobby>;

const Template: ComponentStory<typeof Lobby> = (args) => <Lobby {...args} />;

// Empty
export const Empty = Template.bind({});
Empty.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A11584",
  },
};
Empty.storyName = "Empty lobby";
Empty.args = { ...LobbyData };

// one group
export const OneGroup = Template.bind({});
OneGroup.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A11271",
  },
};
OneGroup.storyName = "One group";
OneGroup.args = { ...LobbyData };

// two groups
export const TwoGroups = Template.bind({});
TwoGroups.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=474%3A3400",
  },
};
TwoGroups.storyName = "Two groups";
TwoGroups.args = { ...LobbyData };
