import { Player } from "./player.interface";
import { RoomDto } from "./room-dto.interface";
export interface SocketCallback {
    status: string;
    message?: string;
    data?: {
        playerId?: string;
        roomId?: string;
        room?: RoomDto;
        partner?: Player;
        gameCode?: number;
    };
}
