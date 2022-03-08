import { WizardType } from "./Wizard.types";

export const WizardData: WizardType = {
  handleClick: () => {
    alert("click");
  },
  groups: [
    {
      id: 0,
      name: "Group 1",
    },
    {
      id: 2,
      name: "Group 2",
    },
  ],
};
