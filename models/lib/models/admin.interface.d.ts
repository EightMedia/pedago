import { Organisation } from "./organisation.interface";
import { PlayersType } from "./players-type.interface";
import { Role } from "./role.enum";
export interface Admin {
  id: string;
  name?: string;
  email?: string;
  role?: Role[];
  customFunction?: string;
  organisation?: Organisation;
  playersType?: PlayersType;
}
