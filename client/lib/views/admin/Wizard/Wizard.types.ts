import { Socket } from "socket.io-client";

export type WizardType = {
  socket: Socket;
  handleRegisterGame: () => void;
};
