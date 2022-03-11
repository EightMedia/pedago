import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Lobby } from "./Lobby";
import { LobbyDataOneGroup, LobbyDataTwoGroups } from "./Lobby.data";

export default {
  title: "Views/Game/Lobby",
  component: Lobby,
} as ComponentMeta<typeof Lobby>;

const Template: ComponentStory<typeof Lobby> = (args) => <Lobby {...args} />;

// one group
export const OneGroup = Template.bind({});
OneGroup.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=459%3A1927",
  },
};
OneGroup.storyName = "One group";
OneGroup.args = { ...LobbyDataOneGroup };

// two groups
export const TwoGroups = Template.bind({});
TwoGroups.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=459%3A2532",
  },
};
TwoGroups.storyName = "Two groups";
TwoGroups.args = { ...LobbyDataTwoGroups };
