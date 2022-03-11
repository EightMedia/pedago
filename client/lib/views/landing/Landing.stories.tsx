import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LandingPage from "./LandingPage";

export default {
  title: "Views/Landing Page",
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => (
  <LandingPage {...args} />
);

// story
export const Home = Template.bind({});
Home.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=563%3A4640",
  },
};
Home.storyName = "Landing Page";
Home.args = {};
