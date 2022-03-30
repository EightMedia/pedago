import { Sector } from "./sector.enum";

export interface Players {
  type: PlayerType;
  year?: 1 | 2 | 3 | 4;
  sector: Sector[];
  education?: string;
}

export type PlayerType = "Studenten" | "Professionals";
