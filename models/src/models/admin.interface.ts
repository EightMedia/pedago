import { Organisation } from "./organisation.interface";
import { Players } from "./players-type.interface";
import { Role } from "./role.enum";

export interface Admin {
  id?: string;
  socketId?: string;
  name?: string;
  email?: string;
  role?: Role[];
  customRole?: string;
  organisation?: Organisation;
  players?: Players;
  currentRound?: number;
}
