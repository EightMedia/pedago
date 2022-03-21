import { Player } from "./player.interface";
import { RoomDto } from "./room-dto.interface";
export interface SocketCallback {
    status: string;
    message?: string;
    data?: {
        playerId?: Player["id"];
        roomId?: RoomDto["id"];
        room?: RoomDto;
        partner?: Player;
        roomCode?: RoomDto["roomCode"];
    };
}
