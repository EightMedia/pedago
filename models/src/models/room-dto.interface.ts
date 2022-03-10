import { Player } from "./player.interface";
import { Admin } from "./admin.interface";
import { Organisation } from "./organisation.interface";
import { Options } from "./option.interface";
import { Group } from "./group.interface";
import { Team } from "./team.interface";

export interface RoomDto {
  id: string;
  socketId: string;
  admin: Admin;
  gameCode: number;
  organisation?: Organisation;
  players: Player[];
  groups?: Group[];
  teams?: Team[];
  active: boolean;
  locked: boolean;
  startDate: string | Date;
  options?: Options;
}
