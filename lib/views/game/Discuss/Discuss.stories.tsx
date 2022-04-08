import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Discuss } from "./Discuss";
import {
  DiscussDataOneCompanion,
  DiscussDataTwoCompanions,
} from "./Discuss.data";
import { DiscussStep } from "./Discuss.types";

export default {
  title: "Views/Game/Discuss",
  component: Discuss,
} as ComponentMeta<typeof Discuss>;

const Template: ComponentStory<typeof Discuss> = (args) => (
  <Discuss {...args} />
);

// ready
export const Ready = Template.bind({});
Ready.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A3810",
  },
};
Ready.args = { ...DiscussDataOneCompanion, initialStep: DiscussStep.Ready };

// ready
export const ReadyTwoCompanions = Template.bind({});
ReadyTwoCompanions.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A3810",
  },
};
ReadyTwoCompanions.storyName = "Ready (2 companions)";
ReadyTwoCompanions.args = {
  ...DiscussDataTwoCompanions,
  initialStep: DiscussStep.Ready,
};

// intro
export const Intro = Template.bind({});
Intro.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=467%3A2188",
  },
};
Intro.args = { ...DiscussDataOneCompanion, initialStep: DiscussStep.Intro };

// info
export const Info = Template.bind({});
Info.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=520%3A4419",
  },
};
Info.args = { ...DiscussDataOneCompanion, initialStep: DiscussStep.Info };

// Compare
export const Compare = Template.bind({});
Compare.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=542%3A3499",
  },
};
Compare.args = { ...DiscussDataOneCompanion, initialStep: DiscussStep.Compare };

// Compare two companions
export const CompareTwoCompanions = Template.bind({});
CompareTwoCompanions.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=467%3A2665",
  },
};
CompareTwoCompanions.storyName = "Compare (2 companions)";
CompareTwoCompanions.args = {
  ...DiscussDataTwoCompanions,
  initialStep: DiscussStep.Compare,
};

// autoplay
export const AutoPlay = Template.bind({});
AutoPlay.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=460%3A3810",
  },
};
AutoPlay.storyName = "Play all scenes";
AutoPlay.args = {
  ...DiscussDataOneCompanion,
  initialStep: DiscussStep.Ready,
  autoPlay: true,
};
