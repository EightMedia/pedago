import { Result } from "@components/Result";
import {
  ResultData,
  ResultGroup1,
  ResultGroup2,
  ResultGroup3
} from "@components/Result/Result.data";
import { ResultStep } from "@components/Result/Result.types";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Views/Admin/Result",
  component: Result,
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

// loader
export const Loader = Template.bind({});
Loader.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=495%3A8604",
  },
};
Loader.storyName = "Result loader";
Loader.args = { ...ResultData };

// One group
export const OneGroup = Template.bind({});
OneGroup.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=519%3A9017",
  },
};
OneGroup.storyName = "One group";
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
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=519%3A9017",
  },
};
TwoGroups.storyName = "Two groups";
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
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=519%3A9017",
  },
};
ThreeGroups.storyName = "Three groups";
ThreeGroups.args = {
  ...ResultData,
  initialStep: ResultStep.Result,
  data: {
    groups: [ResultGroup1, ResultGroup2, ResultGroup3],
  },
};

// Autoplay
export const AutoPlay = Template.bind({});
AutoPlay.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=517%3A4209",
  },
};
AutoPlay.storyName = "Autoplay scenes";
AutoPlay.args = {
  ...ResultData,
  autoPlay: true,
  data: {
    groups: [ResultGroup1, ResultGroup2],
  },
};
