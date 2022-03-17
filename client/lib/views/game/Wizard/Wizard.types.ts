import { RoomDto, SocketCallback } from "models";
import { Socket } from "socket.io-client";

export enum WizardStep {
  RoomCode,
  Name,
  Group,
  Info,
}

export type WizardType = {
  socket?: Socket;
  callbackResponse?: SocketCallback;
  handleEmitRoom: (room: RoomDto) => void;
  initialStep?: WizardStep;
};
