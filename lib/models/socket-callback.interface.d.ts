import { Player } from "./player.interface";
export interface SocketCallback {
    status: string;
    message?: string;
    data?: {
        playerId?: string;
        roomId?: string;
        partner?: Player;
    };
}
