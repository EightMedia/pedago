import { Admin } from "./admin.interface";
import { Group } from "./group.interface";
import { Options } from "./option.interface";
import { Organisation } from "./organisation.interface";
import { Player } from "./player.interface";

export interface RoomDto {
  id: string;
  socketId: string;
  admin: Admin;
  roomCode: number;
  organisation?: Organisation;
  players: Player[];
  groups?: Group[];
  teams?: Player[][];
  active: boolean;
  locked: boolean;
  startDate: string | Date;
  options?: Options;
}
