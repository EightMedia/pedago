import { Group, SocketCallback } from "models";
import { ViewName } from "models/lib/models/view-state.interface";
import { Socket } from "socket.io-client";

export enum WizardStep {
  RoomCode,
  Name,
  Group,
  Info,
}

export type WizardType = {
  socket: Socket;
  response?: SocketCallback;
  handleEmit: (vn: ViewName) => void;
  groups: Group[];
  initialStep?: WizardStep;
};
