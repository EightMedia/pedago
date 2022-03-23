import { RoomDto } from "models";
import { Socket } from "socket.io-client";
import { PlayerGroupType } from "../../../components/PlayerGroup/PlayerGroup.types";

export type LobbyType = {
  room: {
    id: RoomDto["id"];
    roomCode: RoomDto["roomCode"];
  };
  socket?: Socket;
  groups: PlayerGroupType[];
};
