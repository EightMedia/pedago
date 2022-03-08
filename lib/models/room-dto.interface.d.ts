import { Player } from "./player.interface";
import { Admin } from "./admin.interface";
import { Organisation } from "./organisation.interface";
import { Options } from "./option.interface";
import { Group } from "./group.interface";
export interface RoomDto {
  id: string;
  admin: Admin;
  gameCode: number;
  players: Player[];
  groups: Group[];
  active: boolean;
  locked: boolean;
  startDate: string | Date;
  options: Options;
}
