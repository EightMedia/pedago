import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Game } from "./Game";
import { GameData } from "./Game.data";

export default {
  title: "Views/Admin/Game",
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "Desktop",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Game";
Primary.args = { ...GameData };
