import { PlayerType } from "../../../models";
import { WizardStep, WizardType } from "./Wizard.types";

export const wizardDataStudents: WizardType["data"] = {
  info: {
    name: "Henk de Vries",
    email: "henk@eight.nl",
    role: [0, 2],
    customRole: "Barista",
    organisation: {
      name: "Hogeschool Rotterdam",
      location: "Rotterdam",
    },
    players: {
      type: PlayerType.Students,
      year: [2],
      sector: [1, 2],
      education: "Pabo",
    },
  },
  options: {
    timer: false,
    inGroups: true,
  },
  groups: [
    {
      id: "group1",
      name: "Hogeschool Utrecht",
    },
    {
      id: "group2",
      name: "Hogeschool Rotterdam",
    },
  ],
};

export const WizardData: WizardType = {
  initialStep: WizardStep.Name,
  data: {},
  handleRegisterGame: function (): void {
    throw new Error("Function not implemented.");
  },
};
