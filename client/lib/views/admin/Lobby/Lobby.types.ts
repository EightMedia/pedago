import { Player, RoomDto } from "models";
import { Socket } from "socket.io-client";

export type LobbyType = {
    socket: Socket;
    room: RoomDto;
    playerList: Player[];
};
