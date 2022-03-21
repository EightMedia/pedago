import { Group } from "./group.interface";
import { PlayerStatus } from "./player-status.enum";
import { Round } from "./round.interface";
import { ViewName } from "./view-state.interface";
export interface Player {
    id: string;
    socketId: string;
    name: string;
    group: Group;
    roomId: string;
    rounds: Round[];
    view: ViewName;
    status: PlayerStatus;
}
