import { Player } from "./player.interface";
import { Admin } from "./admin.interface";
import { Organisation } from "./organisation.interface";
import { Options } from "./option.interface";
import { Group } from "./group.interface";
export interface RoomDto {
    id: string;
    socketId: string;
    admin: Admin;
    gameCode: number;
    organisation?: Organisation;
    players: Player[];
    groups?: Group[];
    teams?: Player[][];
    active: boolean;
    locked: boolean;
    startDate: string | Date;
    options?: Options;
}
