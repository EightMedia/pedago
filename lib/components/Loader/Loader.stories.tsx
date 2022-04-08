import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loader } from "./Loader";
import { LoaderData } from "./Loader.data";

export default {
  title: "Components/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader  />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Loader";
Primary.args = { ...LoaderData };

// story
export const OnDark = Template.bind({});
OnDark.parameters = {
  backgrounds: {
    default: "dark",
  },
  design: {
    type: "figma",
    url: "",
  },
};
OnDark.storyName = "Op donkere achtergrond";
OnDark.args = { ...LoaderData };
