import { SocketCallback } from "models";
import { Socket } from "socket.io-client";

export enum WizardStep {
  RoomCode,
  Name,
  Group,
  Info,
}

export type WizardType = {
  socket?: Socket;
  response?: SocketCallback;
  handleEmit: (res: SocketCallback) => void;
  initialStep?: WizardStep;
};
