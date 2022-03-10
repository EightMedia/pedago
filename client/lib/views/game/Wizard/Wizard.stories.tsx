import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Wizard } from "./Wizard";
import { WizardData } from "./Wizard.data";

export default {
  title: "Views/Game/Wizard",
  component: Wizard,
} as ComponentMeta<typeof Wizard>;

const Template: ComponentStory<typeof Wizard> = (args) => <Wizard {...args} />;

// room code
export const RoomCode = Template.bind({});
RoomCode.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A6898",
  },
};
RoomCode.storyName = "Room code";
RoomCode.args = {
  initialStep: 0,
};

// user name
export const Name = Template.bind({});
Name.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A7172",
  },
};
Name.storyName = "User name";
Name.args = {
  initialStep: 1,
};

// group
export const Group = Template.bind({});
Group.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=459%3A1769",
  },
};
Group.storyName = "Group choice";
Group.args = {
  initialStep: 2,
};

// info
export const Info = Template.bind({});
Info.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=520%3A4271",
  },
};
Info.storyName = "Info choice";
Info.args = {
  initialStep: 3,
};