import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GlassPanel } from "../GlassPanel";
import { PanelGroup } from "./PanelGroup";

export default {
  viewPort: { defaultViewport: "Full" },
  title: "Components/PanelGroup",
  component: PanelGroup,
} as ComponentMeta<typeof PanelGroup>;

const Template: ComponentStory<typeof PanelGroup> = (args) => (
  <PanelGroup {...args} />
);

const childs1 = () => {
  return (
    <>
      <GlassPanel>🚀</GlassPanel>
    </>
  );
};

const childs2 = () => {
  return (
    <>
      <GlassPanel>🚀</GlassPanel>
      <GlassPanel>🚀</GlassPanel>
    </>
  );
};

// One
export const One = Template.bind({});
One.parameters = {
  viewport: {
    defaultViewport: "Full",
  },
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
One.args = { children: childs1() };

// Two
export const Two = Template.bind({});
Two.parameters = {
  viewport: {
    defaultViewport: "Full",
  },
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Two.args = { children: childs2() };
