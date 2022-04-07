import { ComponentMeta, ComponentStory } from "@storybook/react";
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
export const Sm = Template.bind({});
Sm.parameters = {
  design: {
    type: "figma",
    url: "",
  },
  backgrounds: {
    default: "dark",
  },
};
Sm.storyName = "Small";
Sm.args = { ...PlayerData };

// large
export const Lg = Template.bind({});
Lg.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Lg.storyName = "large";
Lg.args = { ...PlayerData, size: "lg" };
