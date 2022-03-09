import { Player } from "./player.interface";
export interface SocketCallback {
    status?: string;
    message?: string;
    data?: {
        roomId?: string;
        playerId?: string;
        partner?: Player;
    };
}
