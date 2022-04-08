import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Shape } from "./Shape";
import { ShapeData } from "./Shape.data";

export default {
  title: "Components/Shape",
  component: Shape,
  argTypes: {
    category: {
      control: {
        type: "radio",
        options: {
          Caring: "0",
          Personal: "1",
          Contextual: "2",
          Critical: "3",
          Functional: "4",
          Psychological: "5",
        },
      },
    },
    className: {
      control: false,
    },
  },
} as ComponentMeta<typeof Shape>;

const Template: ComponentStory<typeof Shape> = (args) => <Shape {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=355%3A172",
  },
};
Primary.storyName = "Shape";
Primary.args = { ...ShapeData };
