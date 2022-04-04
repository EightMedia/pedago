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
      type: "Studenten",
      year: 2,
      sector: [1, 2],
      education: "Pabo",
    },
  },
  options: {
    timer: false,
    inGroups: true,
  },
};

export const WizardData: WizardType = {
  initialStep: WizardStep.Name,
  data: {},
};
