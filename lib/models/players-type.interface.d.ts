import { Sector } from "./sector.enum";

export interface Players {
    type: PlayerType;
    leerjaar?: 1 | 2 | 3 | 4;
    sector: Sector[];
}
export declare type PlayerType = "Studenten" | "Professionals";
