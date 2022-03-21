import { Player, RoomDto } from "models";
import { Socket } from "socket.io-client";

export type PlayerMatchType = {
  socket: Socket;
  round: number;
  roundMax: number;
  teams: Player[][];
  room: RoomDto;
  playerId: Player["id"];
};
