import { Dispatch, SetStateAction } from "react";
import { Admin, RoomDto } from "./../lib/models";

export enum WizardStep {
  Name,
  Organisation,
  GameType,
  Options,
  Check,
}

export type WizardStepProps = {
  data: WizardType["data"];
  updateData: any;
  handleStep: Dispatch<SetStateAction<WizardStep>>;
};

export type WizardType = {
  initialStep: WizardStep;
  handleRegisterGame: (room: Partial<RoomDto>) => void;
  data: {
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
  };
};
