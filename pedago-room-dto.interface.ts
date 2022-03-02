import { Player } from "./player.interface"; 
import { Admin } from './admin.interface';
import { Organisation } from "./organisation.interface";
import { Options } from "./option.interface";

export interface PedagoRoomDto {
    id: string,
    admin: Admin;
    gameCode: number;
    organisation: Organisation;
    players: Player[]
    active: boolean;
    locked: boolean;
    startDate: string | Date;
    options: Options
}
