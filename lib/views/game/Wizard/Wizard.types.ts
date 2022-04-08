
export enum WizardStep {
  RoomCode,
  Name,
  Group,
  Info,
}

export type WizardType = {
  initialStep?: WizardStep;
};
