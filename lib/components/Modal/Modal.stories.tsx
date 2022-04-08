import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Modal } from "./Modal";
import { ModalData } from "./Modal.data";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Modal";
Primary.args = { ...ModalData };
