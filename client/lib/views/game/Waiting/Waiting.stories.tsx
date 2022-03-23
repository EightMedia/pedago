import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Waiting } from "./Waiting";
import {
  WaitingDataOneCompanion,
  WaitingDataTwoCompanions,
} from "./Waiting.data";

export default {
  title: "Views/Game/Waiting",
  component: Waiting,
} as ComponentMeta<typeof Waiting>;

const Template: ComponentStory<typeof Waiting> = (args) => (
  <Waiting {...args} />
);

// One companion
export const OneCompanion = Template.bind({});
OneCompanion.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A3793",
  },
};
OneCompanion.storyName = "One Companion";
OneCompanion.args = { ...WaitingDataOneCompanion };

// Two companion
export const TwoCompanions = Template.bind({});
TwoCompanions.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A3793",
  },
};
TwoCompanions.storyName = "Two Companions";
TwoCompanions.args = { ...WaitingDataTwoCompanions };
