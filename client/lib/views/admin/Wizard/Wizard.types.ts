import { Admin, RoomDto } from "models";
import { Dispatch, SetStateAction } from "react";

export enum WizardStep {
  Name,
  Organisation,
  GameType,
  Options,
  Check,
}

export interface WizardData {
  info?: {
    name?: Admin["name"];
    email?: Admin["email"];
    role?: Admin["role"];
    customRole?: Admin["customRole"];
    organisation?: Admin["organisation"];
    players?: Admin["players"];
  };
  options?: RoomDto["options"];
  groups?: RoomDto["groups"];
}

export type WizardStepProps = {
  data: WizardType["data"];
  updateData: (value: unknown, path: string) => void;
  handleStep: Dispatch<SetStateAction<WizardStep>>;
};

export type WizardType = {
  initialStep: WizardStep;
  handleRegisterGame: (room: Partial<RoomDto>) => void;
  data: WizardData;
};
