import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Wizard } from "./Wizard";
import { WizardData } from "./Wizard.data";
import { WizardStep } from "./Wizard.types";

export default {
  title: "Views/Game/Wizard",
  component: Wizard,
  argTypes: {
    initialStep: {
      control: false,
    },
  },
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
RoomCode.args = {
  ...WizardData,
  initialStep: WizardStep.RoomCode,
};

// user name
export const UserName = Template.bind({});
UserName.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A7172",
  },
};
UserName.args = {
  ...WizardData,
  initialStep: WizardStep.Name,
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
  ...WizardData,
  initialStep: WizardStep.Group,
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
Info.storyName = "Info";
Info.args = {
  initialStep: WizardStep.Info,
};
