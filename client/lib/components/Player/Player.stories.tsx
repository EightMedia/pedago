import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Player } from "./Player";
import { PlayerData } from "./Player.data";

export default {
  title: "Components/Player",
  component: Player,
  argTypes: {
    size: {
      options: ["sm", "lg"],
    },
    active: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;

// Small
export const sm = Template.bind({});
sm.parameters = {
  design: {
    type: "figma",
    url: "",
  },
  backgrounds: {
    default: "dark",
  },
};
sm.storyName = "Small";
sm.args = { ...PlayerData };

// large
export const lg = Template.bind({});
lg.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
lg.storyName = "large";
lg.args = { ...PlayerData, size: "lg" };
