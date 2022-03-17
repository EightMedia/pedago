import { RoomDto } from "models";
import { Socket } from "socket.io-client";

export enum WizardStep {
  RoomCode,
  Name,
  Group,
  Info,
}

export type WizardType = {
  socket?: Socket;
  initialStep?: WizardStep;
  room: RoomDto;
};
