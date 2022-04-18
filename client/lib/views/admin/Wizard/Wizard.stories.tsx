import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Wizard } from "./Wizard";
import { WizardData, wizardDataStudents } from "./Wizard.data";
import { WizardStep } from "./Wizard.types";

export default {
  title: "Views/Admin/Wizard",
  component: Wizard,
  argTypes: {
    initialStep: {
      control: {
        type: "select",
        options: Object.values(WizardStep),
      },
    },
  },
} as ComponentMeta<typeof Wizard>;

const Template: ComponentStory<typeof Wizard> = (args) => <Wizard {...args} />;

const params = (url: string) => {
  return {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "Desktop",
    },
    design: {
      type: "figma",
      url: url,
    },
  };
};

// Name
export const Name = Template.bind({});
Name.parameters = params(
  "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=467%3A3285"
);
Name.args = {
  ...WizardData,
  initialStep: WizardStep.Name,
  data: wizardDataStudents,
};

// Organisation
export const Organisation = Template.bind({});
Organisation.parameters = params(
  "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=474%3A2747"
);
Organisation.args = {
  ...WizardData,
  initialStep: WizardStep.Organisation,
  data: wizardDataStudents,
};

// GameType
export const GameType = Template.bind({});
GameType.parameters = params(
  "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=474%3A3011"
);
GameType.args = {
  ...WizardData,
  initialStep: WizardStep.GameType,
  data: wizardDataStudents,
};

// Options
export const Options = Template.bind({});
Options.parameters = params(
  "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=474%3A3238"
);
Options.args = {
  ...WizardData,
  initialStep: WizardStep.Options,
  data: wizardDataStudents,
};

// Check
export const Check = Template.bind({});
Check.parameters = params(
  "https://www.figma.com/file/DZM2PnJJJuuqsxjO8tv8Kn/Pedago?node-id=519%3A5446"
);
Check.args = {
  ...WizardData,
  initialStep: WizardStep.Check,
  data: wizardDataStudents,
};
