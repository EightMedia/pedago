import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { GlassPanel } from "./GlassPanel";
import { GlassPanelData } from "./GlassPanel.data";

export default {
  title: "Components/GlassPanel",
  component: GlassPanel,
} as ComponentMeta<typeof GlassPanel>;

const Template: ComponentStory<typeof GlassPanel> = (args) => (
  <GlassPanel>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
      voluptatum? Quae sit cum laudantium, ex dolorum libero quisquam, ipsa iure
      excepturi saepe quos harum fugiat laboriosam nulla mollitia impedit rerum?
    </p>
  </GlassPanel>
);

// story
export const Primary = Template.bind({});
Primary.parameters = {
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "GlassPanel";
Primary.args = { ...GlassPanelData };
