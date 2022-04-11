import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Lobby } from "./Lobby";
import { LobbyData, LobbyDataOneGroup, LobbyDataTwogroups } from "./Lobby.data";
import { LobbyStep } from "./Lobby.types";

export default {
  title: "Views/Admin/Lobby",
  component: Lobby,
} as ComponentMeta<typeof Lobby>;

const Template: ComponentStory<typeof Lobby> = (args) => <Lobby {...args} />;

// Empty
export const Info = Template.bind({});
Info.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=519%3A5142",
  },
  argTypes: {
    initialStep: false,
  },
};
Info.storyName = "Info screen";
Info.args = { ...LobbyData, initialStep: LobbyStep.Info };

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
Empty.args = { ...LobbyData, initialStep: LobbyStep.Lobby };

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
OneGroup.args = { ...LobbyDataOneGroup, initialStep: LobbyStep.Lobby };

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
TwoGroups.args = { ...LobbyDataTwogroups, initialStep: LobbyStep.Lobby };
