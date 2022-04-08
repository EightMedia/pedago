import { Category } from "./category.enum";
import { Player } from "./player.interface";
import { RoomDto } from "./room-dto.interface";

export interface SocketCallback {
    status: string;
    message?: string;
    data?: {
        playerId?: Player["id"];
        room?: RoomDto;
        sortOrder?: Category[]
    }
}
