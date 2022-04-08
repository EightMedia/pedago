import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Result } from "./Result";
import {
  ResultData,
  ResultDataMe,
  ResultGroup1,
  ResultGroup2,
  ResultGroup3,
} from "./Result.data";
import { ResultStep } from "./Result.types";

export default {
  title: "Components/Result",
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

// story
export const Loader = Template.bind({});
Loader.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A8604",
  },
};
Loader.storyName = "Result loader";
Loader.args = { ...ResultData, initialStep: ResultStep.Loader };

// One group
export const OneGroup = Template.bind({});
OneGroup.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=513%3A3954",
  },
};
OneGroup.args = {
  ...ResultData,
  initialStep: ResultStep.Result,
  data: {
    groups: [ResultGroup1],
  },
};

// Two groups
export const TwoGroups = Template.bind({});
TwoGroups.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=517%3A4209",
  },
};
TwoGroups.args = {
  ...ResultData,
  initialStep: ResultStep.Result,
  data: {
    groups: [ResultGroup1, ResultGroup2],
  },
};

// Three groups
export const ThreeGroups = Template.bind({});
ThreeGroups.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=517%3A4209",
  },
};
ThreeGroups.args = {
  ...ResultData,
  initialStep: ResultStep.Result,
  data: {
    groups: [ResultGroup1, ResultGroup2, ResultGroup3],
  },
};

// Me and one group
export const MeAndOneGroup = Template.bind({});
MeAndOneGroup.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=513%3A3954",
  },
};
MeAndOneGroup.args = {
  ...ResultData,
  initialStep: ResultStep.Result,
  data: {
    me: ResultDataMe,
    groups: [ResultGroup1],
  },
};

// Me and two groups
export const MeAndTwoGroups = Template.bind({});
MeAndTwoGroups.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=513%3A3954",
  },
};
MeAndTwoGroups.args = {
  ...ResultData,
  initialStep: ResultStep.Result,
  data: {
    me: ResultDataMe,
    groups: [ResultGroup1, ResultGroup2],
  },
};

// Me and three groups
export const MeAndThreeGroups = Template.bind({});
MeAndThreeGroups.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=513%3A3954",
  },
};
MeAndThreeGroups.args = {
  ...ResultData,
  initialStep: ResultStep.Result,
  data: {
    me: ResultDataMe,
    groups: [ResultGroup1, ResultGroup2, ResultGroup3],
  },
};

// Autoplay
export const AutoPlay = Template.bind({});
AutoPlay.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=517%3A4209",
  },
};
AutoPlay.storyName = "Autoplay scenes";
AutoPlay.args = {
  ...ResultData,
  initialStep: ResultStep.Loader,
  autoPlay: true,
  data: {
    me: ResultDataMe,
    groups: [ResultGroup1, ResultGroup2, ResultGroup3],
  },
};
