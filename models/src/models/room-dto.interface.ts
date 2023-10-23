import { Admin } from "./admin.interface";
import { Group } from "./group.interface";
import { Language } from "./language.enum";
import { Options } from "./option.interface";
import { Organisation } from "./organisation.interface";
import { Player } from "./player.interface";
import { ViewName } from "./view-state.interface";

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
  timerStamp: number;
  options?: Options;
  view: ViewName;
  round: number;
  language: Language;
}
